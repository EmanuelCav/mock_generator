import { useCallback, useMemo, useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as StoreReview from 'expo-store-review';

import Column from '../components/Column';
import ButtonGenerator from '../components/ButtonGenerator';
import Media from '../components/Media';
import Banner from '../components/Banner';
import FormColumn from '../components/form/FormColumn';
import FormEdit from '../components/form/FormEdit';
import Container from '../components/ContainerGeneral';
import Options from '../components/Options';
import DownloadView from '../components/DownloadView';
import Preview from '../components/Preview';

import { IColumn, ICreateColumn } from '../interface/Column';
import { FileOptions } from '../interface/File';
import { IHistory } from '../interface/User';

import { fileStore } from "../store/file.store";
import { userStore } from '../store/user.store';

import * as FileSystemOptions from '../utils/generator';
import { generateRandomNumber, generateRandomString } from '../utils/data';

import { useLanguage } from '../hooks/useLanguageContext';

const Home = observer(() => {

    const { t } = useLanguage()

    const [isForm, setIsForm] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isOptions, setIsOptions] = useState<boolean>(false)
    const [isGenerated, setIsGenerated] = useState<boolean>(false)
    const [isPreview, setIsPreview] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingDownload, setLoadingDownload] = useState<boolean>(false);
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false)
    const [titleError, setTitleError] = useState<string>("")
    const [isRefreshData, setIsRefreshData] = useState<boolean>(false);

    const fieldsData = useMemo(() => {
        return FileSystemOptions.generateData(fileStore.column);
    }, [fileStore.column.length, fileStore.rows, fileStore.column, fileStore.rows, isRefreshData]);

    const handleAddColumn = useCallback((data: ICreateColumn) => {

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
    }, [])

    const removeColumn = useCallback((data: IColumn) => {
        fileStore.removeColumn(data)
    }, [])

    const openEdit = useCallback((data: IColumn) => {
        fileStore.getField(data)
        setIsEdit(true)
    }, [])

    const handleEdit = useCallback((data: IColumn) => {
        fileStore.updateField(data)
        setIsEdit(false)
    }, [])

    const closeEdit = useCallback(() => {
        fileStore.getField(null)
        setIsEdit(false)
    }, [])

    const handleGenerate = useCallback(() => {

        setLoading(true)

        try {

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

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
            setIsGenerated(true);
        }
    }, [fieldsData])

    const handleOption = useCallback((col: FileOptions) => {
        fileStore.updateOptions(col)
        setIsOptions(false)
    }, [])

    const handleDownload = useCallback(() => {

        setLoadingDownload(true)

        try {

            switch (fileStore.format) {
                case "excel":
                    FileSystemOptions.excelDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, t)
                    break;

                case "csv":
                    FileSystemOptions.csvDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.header_csv, t)
                    break;

                case "xml":
                    FileSystemOptions.xmlDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.root_element_xml, fileStore.record_element_xml, t)
                    break;

                case "json":
                    FileSystemOptions.jsonDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.json_array, t)
                    break;

                case "sql":
                    FileSystemOptions.sqlDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, fileStore.table_name_sql, t)
                    break;

                default:
                    FileSystemOptions.excelDownload(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, setIsDownloaded, t)
                    break;
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoadingDownload(false)
        }
    }, [fieldsData, t])

    const handleShare = useCallback(() => {

        switch (fileStore.format) {
            case "excel":
                FileSystemOptions.excelGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, t)
                break;

            case "csv":
                FileSystemOptions.csvGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.header_csv, t)
                break;

            case "xml":
                FileSystemOptions.xmlGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.root_element_xml, fileStore.record_element_xml, t)
                break;

            case "json":
                FileSystemOptions.jsonGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.json_array, t)
                break;

            case "sql":
                FileSystemOptions.sqlGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, fileStore.table_name_sql, t)
                break;

            default:
                FileSystemOptions.excelGenerator(fieldsData, fileStore.file_name === "" ? "DATA_MOCKER" : fileStore.file_name, t)
                break;
        }
    }, [fieldsData, t])

    const handleRefreshData = useCallback(() => {
        setIsRefreshData(true)

        setTimeout(() => {
            setIsRefreshData(false)
        }, 600)
    }, [])

    const requestAppReview = useCallback(async () => {

        try {

            const isAvailable = await StoreReview.isAvailableAsync()

            if (isAvailable) {
                await StoreReview.requestReview()
            }

        } catch (error) {
            console.error("Error requesting review:", error);
        }
    }, [])

    useFocusEffect(
        useCallback(() => {
            const handleCount = async () => {

                try {

                    const storedCount = await AsyncStorage.getItem("reviewCount")

                    if (storedCount === null) {
                        await AsyncStorage.setItem("reviewCount", "0")
                        return
                    }

                    const count = parseInt(storedCount, 10);

                    if ((count === 1 || count % 25 === 0) && count !== 0) {
                        await requestAppReview();
                    }

                } catch (error) {
                    console.log(error)
                }
            }

            handleCount();
        }, [requestAppReview])
    );

    /* useEffect(() => {
        const fields = FileSystemOptions.generateData(fileStore.column);
        setFieldsData(fields)
    }, [fileStore.column.length, fileStore.rows, fileStore.format, isRefreshData, fileStore.column]) */

    return (
        <Container>

            {isPreview && (
                <Preview
                    setIsPreview={setIsPreview}
                    data={fieldsData}
                    format={fileStore.format}
                    header_csv={fileStore.header_csv}
                    json_array={fileStore.json_array}
                    record_element_xml={fileStore.record_element_xml}
                    root_element_xml={fileStore.root_element_xml}
                    table_name_sql={fileStore.table_name_sql}
                    t={t}
                />
            )}

            {isForm && (
                <FormColumn
                    error={titleError}
                    handleClose={() => setIsForm(false)}
                    handleAddColumn={handleAddColumn}
                    t={t}
                />
            )}

            {isEdit && (
                <FormEdit
                    field={fileStore.field!}
                    handleClose={closeEdit}
                    handleEdit={handleEdit}
                    t={t}
                />
            )}

            {isOptions && (
                <Options
                    handleClose={() => setIsOptions(false)}
                    handleOption={handleOption}
                    t={t}
                />
            )}

            {isGenerated && (
                <DownloadView
                    loading={loadingDownload}
                    isDownloaded={isDownloaded}
                    setIsDownloaded={setIsDownloaded}
                    handleDownload={handleDownload}
                    setIsGenerated={setIsGenerated}
                    handleShare={handleShare}
                    text={t("fileGenerated")}
                    t={t}
                />
            )}


            <Banner />

            <Media
                openForm={() => setIsForm(true)}
                openOptions={() => setIsOptions(true)}
                openPreview={() => setIsPreview(true)}
                isRefreshData={isRefreshData}
                t={t}
            />

            <ButtonGenerator
                handleGenerate={handleGenerate}
                columnsLength={fileStore.column.length}
                loading={loading}
                isRefreshData={isRefreshData}
                handleRefreshData={handleRefreshData}
                t={t}
            />

            <View className="flex-1">

                {fileStore.column.length > 0 ? (

                    <DraggableFlatList
                        data={fileStore.column}
                        keyExtractor={(item) => String(item.id)}

                        onDragEnd={({ data }) =>
                            fileStore.setColumns(data)
                        }

                        renderItem={({
                            item,
                            drag,
                            isActive,
                        }: RenderItemParams<IColumn>) => (

                            <Column
                                column={item}
                                removeColumn={removeColumn}
                                openEdit={openEdit}
                                onLongPress={drag}
                                isActive={isActive}
                            />

                        )}
                    />

                ) : (
                    <View className="flex-1 items-center justify-center px-6">
                        <Text className="mb-6 text-center text-xl font-bold text-black dark:text-white">
                            {t("emptyFields")}
                        </Text>
                        <Pressable
                            onPress={() => setIsForm(true)}
                            className="w-full max-w-xs rounded-xl bg-emerald-500 px-6 py-4 active:opacity-80"
                        >
                            <Text className="text-center text-base font-bold text-white">
                                {t("addField")}
                            </Text>
                        </Pressable>
                    </View>

                )}

            </View>

        </Container>
    )
})

export default Home