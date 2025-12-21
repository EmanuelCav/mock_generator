import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Button, Text, useTheme } from '@rneui/themed';
import * as StoreReview from 'expo-store-review';
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
import Preview from '../components/Preview';

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
    const [isPreview, setIsPreview] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingDownload, setLoadingDownload] = useState<boolean>(false);
    const [fieldsData, setFieldsData] = useState<any[]>([])
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false)
    const [titleError, setTitleError] = useState<string>("")
    const [isRefreshData, setIsRefreshData] = useState<boolean>(false);
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

        const newFile: IHistory = {
            id: generateRandomString(),
            date: new Date().toISOString().split("T")[0],
            data: [...fieldsData],
            name: `${fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name}_${generateRandomString()}`,
            columns: [...fileStore.column],
            extension: fileStore.format,
            header_csv: fileStore.header_csv,
            json_array: fileStore.json_array,
            record_element_xml: fileStore.record_element_xml,
            root_element_xml: fileStore.root_element_xml,
            table_name_sql: fileStore.table_name_sql
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
                FileSystemOptions.excelDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded)
                break;

            case "csv":
                FileSystemOptions.csvDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.header_csv)
                break;

            case "xml":
                FileSystemOptions.xmlDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.root_element_xml, fileStore.record_element_xml)
                break;

            case "json":
                FileSystemOptions.jsonDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.json_array)
                break;

            case "sql":
                FileSystemOptions.sqlDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.table_name_sql)
                break;

            default:
                FileSystemOptions.excelDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded)
                break;
        }

        setTimeout(() => {
            setLoadingDownload(false)
        }, 1260);
    }

    const handleShare = () => {

        switch (fileStore.format) {
            case "excel":
                FileSystemOptions.excelGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name)
                break;

            case "csv":
                FileSystemOptions.csvGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.header_csv)
                break;

            case "xml":
                FileSystemOptions.xmlGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.root_element_xml, fileStore.record_element_xml)
                break;

            case "json":
                FileSystemOptions.jsonGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.json_array)
                break;

            case "sql":
                FileSystemOptions.sqlGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.table_name_sql)
                break;

            default:
                FileSystemOptions.excelGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name)
                break;
        }
    }

    const handleRefreshData = () => {
        setIsRefreshData(true)

        setTimeout(() => {
            setIsRefreshData(false)
        }, 600)
    }

    const requestAppReview = async () => {

        try {

            const isAvailable = await StoreReview.isAvailableAsync()

            if (isAvailable) {
                await StoreReview.requestReview()
            }

        } catch (error) {
            console.error("Error requesting review:", error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            const handleCount = async () => {

                try {

                    const storedCount = await AsyncStorage.getItem("reviewCount");
                    const count = storedCount ? parseInt(storedCount, 10) : 0;

                    if (count !== 0 && (count === 2 || count % 25 === 0)) {
                        requestAppReview();
                    }

                    await AsyncStorage.setItem("reviewCount", (count + 1).toString());

                } catch (error) {
                    console.error("Error checking review count:", error);
                }
            };

            handleCount();
        }, [])
    )

    useEffect(() => {
        const fields = FileSystemOptions.generateData(fileStore.column);
        setFieldsData(fields)
    }, [fileStore.column.length, fileStore.rows, fileStore.format, isRefreshData, fileStore.column])

    useEffect(() => {
        forceRender((prev) => prev + 1);
    }, [userStore.lang])

    return (
        <Container>
            {
                isPreview && <Preview
                    colors={theme.colors}
                    setIsPreview={setIsPreview}
                    data={fieldsData}
                    format={fileStore.format}
                    header_csv={fileStore.header_csv}
                    json_array={fileStore.json_array}
                    record_element_xml={fileStore.record_element_xml}
                    root_element_xml={fileStore.root_element_xml}
                    table_name_sql={fileStore.table_name_sql}
                />
            }
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
            <Media openForm={() => setIsForm(true)} openOptions={() => setIsOptions(true)} 
            openPreview={() => setIsPreview(true)} isRefreshData={isRefreshData} />
            <ButtonGenerator
                handleGenerate={handleGenerate}
                columnsLength={fileStore.column.length}
                loading={loading}
                isRefreshData={isRefreshData}
                handleRefreshData={handleRefreshData}
            />
            <View style={generalStyles.generalContainer}>
                {
                    fileStore.column.length > 0 ? <DraggableFlatList
                        data={fileStore.column}
                        keyExtractor={(item) => String(item.id)}
                        onDragEnd={({ data }) => fileStore.setColumns(data)}
                        renderItem={({ item, drag, isActive }: RenderItemParams<IColumn>) => (
                            <Column
                                colors={theme.colors}
                                column={item}
                                removeColumn={removeColumn}
                                openEdit={openEdit}
                                onLongPress={drag}
                                isActive={isActive}
                            />
                        )}
                    />
                        : <View style={homeStyles.containerNotFields}>
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
            </View>
        </Container>
    );
})

export default Home