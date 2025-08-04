import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { FlatList, View } from "react-native"
import { Button, Text, useTheme } from "@rneui/themed"
import i18n from "../../i18n";

import Container from "../../ContainerGeneral"
import HistoryElement from "../components/HistoryElement";
import DownloadView from "../components/DownloadView";
import Banner from "../components/Banner";

import { IColumn } from "../interface/Column";
import { IHistory } from "../interface/User";

import { generalStyles } from "../styles/general.styles"
import { homeStyles } from "../styles/home.styles";

import { StackNavigation } from "../types/general.types";

import { userStore } from "../store/user.store";
import { fileStore } from "../store/file.store";

import * as FileSystemOptions from "../utils/generator";

const History = observer(({ navigation }: { navigation: StackNavigation }) => {

    const { theme } = useTheme();

    const [isDownload, setIsDownload] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false)
    const [fieldsData, setFieldsData] = useState<any[]>([])
    const [_, forceRender] = useState<number>(0);

    const handleEdit = (column: IColumn[]) => {
        fileStore.getColumns(column)
        navigation.navigate("Create")
    }

    const handleDelete = (history: IHistory) => {
        userStore.removeHistory(history)
    }

    const openDownload = (history: IHistory) => {
        userStore.getHistory(history)
        setFieldsData(history.data)
        setIsDownload(true)
    }

    const handleDownload = () => {

        setLoading(true)

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
            setLoading(false)
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
                isDownload && <DownloadView
                    setIsDownloaded={setIsDownloaded}
                    text={i18n.t("fileGot")}
                    handleDownload={handleDownload}
                    setIsGenerated={setIsDownload}
                    handleShare={handleShare}
                    isDownloaded={isDownloaded}
                    loading={loading}
                    colors={theme.colors}
                />
            }
            <Banner />
            <View style={generalStyles.generalContainer}>
                {
                    userStore.history.length === 0 ?
                        (
                            <View style={homeStyles.containerNotFields}>
                                <Text style={homeStyles.titleNotFields}>
                                    {i18n.t("historyEmpty")}
                                </Text>
                                <Button
                                    title={i18n.t("startNow")}
                                    buttonStyle={{
                                        backgroundColor: "#50C878"
                                    }}
                                    onPress={() => navigation.navigate("Create")}
                                />
                            </View>
                        ) : (
                            <FlatList
                                data={userStore.history}
                                renderItem={({ item }) => <HistoryElement
                                    handleDelete={handleDelete}
                                    openDownload={openDownload}
                                    handleEdit={handleEdit}
                                    colors={theme.colors}
                                    history={item}
                                />}
                                keyExtractor={(_, index) => String(index)}
                            />
                        )
                }
            </View>
        </Container>
    )
})

export default History