import { useState } from "react";
import { observer } from "mobx-react-lite";

import { FlatList, Pressable, Text, View } from "react-native";

import Container from "../components/ContainerGeneral";
import HistoryElement from "../components/HistoryElement";
import DownloadView from "../components/DownloadView";
import Banner from "../components/Banner";

import { IColumn } from "../interface/Column";
import { IHistory } from "../interface/User";

import { StackNavigation } from "../types/general.types";

import { userStore } from "../store/user.store";
import { fileStore } from "../store/file.store";

import { useLanguage } from "../hooks/useLanguageContext";

import * as FileSystemOptions from "../utils/generator";

const History = observer(({ navigation }: { navigation: StackNavigation }) => {

    const { t } = useLanguage();

    const [isDownload, setIsDownload] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [fieldsData, setFieldsData] = useState<any[]>([]);

    const handleEdit = (column: IColumn[]) => {
        fileStore.getColumns(column);
        navigation.navigate("Create");
    }


    const handleDelete = (history: IHistory) => {
        userStore.removeHistory(history);
    }


    const openDownload = (history: IHistory) => {
        userStore.getHistory(history);
        setFieldsData(history.data);
        setIsDownload(true);
    }

    const handleDownload = () => {

        setLoading(true);

        try {

            switch (userStore.historyData?.extension) {

                case "xlsx":

                    FileSystemOptions.excelDownload(
                        fieldsData,
                        userStore.historyData.name,
                        setIsDownloaded, t
                    );

                    break;


                case "csv":

                    FileSystemOptions.csvDownload(
                        fieldsData,
                        userStore.historyData.name,
                        setIsDownloaded,
                        userStore.historyData.header_csv, t
                    );

                    break;


                case "xml":

                    FileSystemOptions.xmlDownload(
                        fieldsData,
                        userStore.historyData.name,
                        setIsDownloaded,
                        userStore.historyData.root_element_xml,
                        userStore.historyData.record_element_xml, t
                    );

                    break;


                case "json":

                    FileSystemOptions.jsonDownload(
                        fieldsData,
                        userStore.historyData.name,
                        setIsDownloaded,
                        userStore.historyData.json_array, t
                    );

                    break;


                case "sql":

                    FileSystemOptions.sqlDownload(
                        fieldsData,
                        userStore.historyData.name,
                        setIsDownloaded,
                        userStore.historyData.table_name_sql, t
                    );

                    break;


                default:

                    FileSystemOptions.excelDownload(
                        fieldsData,
                        userStore.historyData?.name!,
                        setIsDownloaded, t
                    );

                    break;

            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleShare = () => {

        switch (userStore.historyData?.extension) {

            case "xlsx":

                FileSystemOptions.excelGenerator(
                    fieldsData,
                    userStore.historyData.name, t
                );

                break;


            case "csv":

                FileSystemOptions.csvGenerator(
                    fieldsData,
                    userStore.historyData.name,
                    userStore.historyData.header_csv, t
                );

                break;


            case "xml":

                FileSystemOptions.xmlGenerator(
                    fieldsData,
                    userStore.historyData.name,
                    userStore.historyData.root_element_xml,
                    userStore.historyData.record_element_xml, t
                );

                break;


            case "json":

                FileSystemOptions.jsonGenerator(
                    fieldsData,
                    userStore.historyData.name,
                    userStore.historyData.json_array, t
                );

                break;


            case "sql":

                FileSystemOptions.sqlGenerator(
                    fieldsData,
                    userStore.historyData.name,
                    userStore.historyData.table_name_sql, t
                );

                break;


            default:

                FileSystemOptions.excelGenerator(
                    fieldsData,
                    userStore.historyData?.name!, t
                );

                break;

        }

    };

    return (
        <Container>
            {isDownload && (
                <DownloadView
                    setIsDownloaded={setIsDownloaded}
                    text={t("fileGot")}
                    handleDownload={handleDownload}
                    setIsGenerated={setIsDownload}
                    handleShare={handleShare}
                    isDownloaded={isDownloaded}
                    loading={loading}
                    t={t}
                />
            )}
            <Banner />
            <View className="flex-1 bg-white dark:bg-black">
                {userStore.history.length === 0 ? (
                    <View className="flex-1 items-center justify-center px-6">
                        <Text className="mb-6 text-center text-xl font-bold text-black dark:text-white">
                            {t("historyEmpty")}
                        </Text>
                        <Pressable
                            onPress={() => navigation.navigate("Create")}
                            className="w-full max-w-xs rounded-xl bg-emerald-500 px-6 py-4 active:opacity-80">
                            <Text className="text-center text-base font-bold text-white">
                                {t("startNow")}
                            </Text>
                        </Pressable>
                    </View>
                ) : (
                    <FlatList
                        data={userStore.history.slice().reverse()}
                        renderItem={({ item }) => (
                            <HistoryElement
                                t={t}
                                handleDelete={handleDelete}
                                openDownload={openDownload}
                                handleEdit={handleEdit}
                                history={item}
                            />
                        )}
                        keyExtractor={(_, index) =>
                            String(index)
                        }
                        contentContainerClassName="px-4 py-4"
                    />

                )}

            </View>

        </Container>

    );

}
);


export default History;