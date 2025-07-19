import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { View, FlatList } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
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

import { generalStyles } from '../styles/general.styles';
import { homeStyles } from '../styles/home.styles';

import { fileStore } from "../store/file.store";
import { userStore } from '../store/user.store';

import { generateData } from '../utils/generator';

const Home = observer(() => {

    const { theme } = useTheme();

    const [isForm, setIsForm] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isOptions, setIsOptions] = useState<boolean>(false)
    const [isGenerated, setIsGenerated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingDownload, setLoadingDownload] = useState<boolean>(false);
    const [fieldsData, setFieldsData] = useState<any[]>([])
    const [titleError, setTitleError] = useState<string>("")

    const handleAddColumn = (data: ICreateColumn) => {

        if (data.title.length === 0) {
            setTitleError("Error write a field name. Please complete.")
            return
        }

        fileStore.addColumn({
            blank: 0,
            fieldName: String(data.title),
            topic: String(data.columnData),
            id: fileStore.column.length + 1,
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

    const handleEdit = () => {

    }

    const closeEdit = () => {
        setIsEdit(false)
        fileStore.getField(null)
    }

    const handleGenerate = () => {
        setLoading(true)

        const fields = generateData(fileStore.column);

        setFieldsData(fields)

        userStore.addHistory({
            id: userStore.history.length + 1,
            date: new Date().toISOString().split("T")[0],
            data: fields,
            name: `DATA_GENERATED_${userStore.history.length + 1}`,
            columns: fileStore.column
        })

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

        setTimeout(() => {
            setLoadingDownload(false)
        }, 1260);
    }

    return (
        <Container>
            {
                isForm && <FormColumn
                    error={titleError}
                    columnLength={fileStore.column.length}
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
                    handleDownload={handleDownload}
                    colors={theme.colors}
                    setIsGenerated={setIsGenerated}
                />
            }
            <View style={generalStyles.generalContainer}>
                <Banner />
                {
                    fileStore.column.length > 0 ? <FlatList
                        data={fileStore.column}
                        renderItem={({ item }) => <Column
                            colors={theme.colors}
                            removeColumn={removeColumn}
                            openEdit={openEdit}
                            column={item}
                        />}
                        keyExtractor={(column) => String(column.id)}
                    /> : <View style={homeStyles.containerNotFields}>
                        <Text style={homeStyles.titleNotFields}>
                            {i18n.t("emptyFields")}
                        </Text>
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