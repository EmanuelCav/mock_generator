import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { View, FlatList } from 'react-native';
import { Button, Text, useTheme } from '@rneui/themed';
import i18n from '../../i18n';

import Column from '../components/Column';
import ButtonGenerator from '../components/ButtonGenerator';
import Media from '../components/Media';
import Banner from '../components/Banner';
import FormColumn from '../components/form/FormColumn';
import FormEdit from '../components/form/FormEdit';
import Container from '../../ContainerGeneral';
import Options from '../components/Options';
import DownloadView from '../components/DownloadView';

import { IColumn, ICreateColumn } from '../interface/Column';
import { FileOptions } from '../interface/File';
import { IHistory } from '../interface/User';

import { generalStyles } from '../styles/general.styles';
import { homeStyles } from '../styles/home.styles';

import { fileStore } from "../store/file.store";
import { userStore } from '../store/user.store';

import * as FileSystemOptions from '../utils/generator';
import { generateRandomNumber, generateRandomString } from '../utils/data';

const Home = observer(() => {

    const { theme } = useTheme();

    const [isForm, setIsForm] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isOptions, setIsOptions] = useState<boolean>(false)
    const [isGenerated, setIsGenerated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingDownload, setLoadingDownload] = useState<boolean>(false);
    const [fieldsData, setFieldsData] = useState<any[]>([])
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false)
    const [titleError, setTitleError] = useState<string>("")
    const [_, forceRender] = useState<number>(0);

    const handleAddColumn = (data: ICreateColumn) => {

        if (data.title.length === 0) {
            setTitleError("Error write a field name. Please complete.")
            return
        }

        fileStore.addColumn({
            blank: 0,
            fieldName: String(data.title),
            topic: String(data.columnData),
            id: generateRandomNumber(),
            data: data.data
        })

        setIsForm(false)
    }

    const removeColumn = (data: IColumn) => {
        fileStore.removeColumn(data)
    }

    const openEdit = (data: IColumn) => {
        setIsEdit(true)
        fileStore.getField(data)
    }

    const handleEdit = (data: IColumn) => {
        fileStore.updateField(data)
        setIsEdit(false)
    }

    const closeEdit = () => {
        setIsEdit(false)
        fileStore.getField(null)
    }

    const handleGenerate = () => {
        setLoading(true)

        const fields = FileSystemOptions.generateData(fileStore.column);

        setFieldsData(fields)

        const newFile: IHistory = {
            id: generateRandomString(),
            date: new Date().toISOString().split("T")[0],
            data: [...fields],
            name: `DATA_MOCKER_${generateRandomString()}`,
            columns: [...fileStore.column],
            extension: fileStore.format
        }

        userStore.addHistory(newFile)
        userStore.getHistory(newFile)

        setTimeout(() => {
            setLoading(false)
            setIsGenerated(true);
        }, 1260);
    };

    const handleOption = (col: FileOptions) => {
        fileStore.updateOptions(col)
        setIsOptions(false)
    }

    const handleDownload = () => {

        setLoadingDownload(true)

        switch (fileStore.format) {
            case "excel":
                FileSystemOptions.excelDownload(fieldsData, userStore.historyData?.name!, setIsDownloaded)
                break;

            case "csv":
                FileSystemOptions.csvDownload(fieldsData, userStore.historyData?.name!, setIsDownloaded)
                break;

            case "xml":
                FileSystemOptions.xmlDownload(fieldsData, userStore.historyData?.name!, setIsDownloaded)
                break;

            case "json":
                FileSystemOptions.jsonDownload(fieldsData, userStore.historyData?.name!, setIsDownloaded)
                break;

            case "sql":
                FileSystemOptions.sqlDownload(fieldsData, userStore.historyData?.name!, setIsDownloaded)
                break;

            default:
                FileSystemOptions.excelDownload(fieldsData, userStore.historyData?.name!, setIsDownloaded)
                break;
        }

        setTimeout(() => {
            setLoadingDownload(false)
        }, 1260);
    }

    const handleShare = () => {

        switch (fileStore.format) {
            case "excel":
                FileSystemOptions.excelGenerator(fieldsData, userStore.historyData?.name!)
                break;

            case "csv":
                FileSystemOptions.csvGenerator(fieldsData, userStore.historyData?.name!)
                break;

            case "xml":
                FileSystemOptions.xmlGenerator(fieldsData, userStore.historyData?.name!)
                break;

            case "json":
                FileSystemOptions.jsonGenerator(fieldsData, userStore.historyData?.name!)
                break;

            case "sql":
                FileSystemOptions.sqlGenerator(fieldsData, userStore.historyData?.name!)
                break;

            default:
                FileSystemOptions.excelGenerator(fieldsData, userStore.historyData?.name!)
                break;
        }
    }

    useEffect(() => {
        forceRender((prev) => prev + 1);
    }, [userStore.lang])

    return (
        <Container>
            {
                isForm && <FormColumn
                    error={titleError}
                    colors={theme.colors}
                    handleClose={() => setIsForm(false)}
                    handleAddColumn={handleAddColumn}
                />
            }
            {
                isEdit && <FormEdit
                    colors={theme.colors}
                    field={fileStore.field!}
                    handleClose={closeEdit}
                    handleEdit={handleEdit}
                />
            }
            {
                isOptions && <Options
                    handleClose={() => setIsOptions(false)}
                    handleOption={handleOption}
                />
            }
            {
                isGenerated && <DownloadView
                    loading={loadingDownload}
                    isDownloaded={isDownloaded}
                    setIsDownloaded={setIsDownloaded}
                    handleDownload={handleDownload}
                    colors={theme.colors}
                    setIsGenerated={setIsGenerated}
                    handleShare={handleShare}
                    text={i18n.t("fileGenerated")}
                />
            }
            <Banner />
            <View style={generalStyles.generalContainer}>
                {
                    fileStore.column.length > 0 ? <FlatList
                        data={fileStore.column}
                        renderItem={({ item }) => <Column
                            colors={theme.colors}
                            removeColumn={removeColumn}
                            openEdit={openEdit}
                            column={item}
                        />}
                        keyExtractor={(_, index) => String(index)}
                    /> : <View style={homeStyles.containerNotFields}>
                        <Text style={homeStyles.titleNotFields}>
                            {i18n.t("emptyFields")}
                        </Text>
                        <Button
                            title={i18n.t("addField")}
                            buttonStyle={{
                                backgroundColor: "#50C878"
                            }}
                            onPress={() => setIsForm(true)}
                        />
                    </View>
                }
                <Media openForm={() => setIsForm(true)} openOptions={() => setIsOptions(true)} />
                <ButtonGenerator
                    handleGenerate={handleGenerate}
                    columnsLength={fileStore.column.length}
                    loading={loading} />
            </View>
        </Container>
    );
})

export default Home