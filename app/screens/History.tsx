import { useState } from "react";
import { observer } from "mobx-react-lite";
import { FlatList, View } from "react-native"
import { Text, useTheme } from "@rneui/themed"
import i18n from "../../i18n";

import Container from "../../ContainerGeneral"
import HistoryElement from "../components/HistoryElement";
import DownloadView from "../components/DownloadView";

import { IColumn } from "../interface/Column";
import { IHistory } from "../interface/User";

import { generalStyles } from "../styles/general.styles"
import { homeStyles } from "../styles/home.styles";

import { StackNavigation } from "../types/general.types";

import { userStore } from "../store/user.store";
import { fileStore } from "../store/file.store";

const History = observer(({ navigation }: { navigation: StackNavigation }) => {

    const { theme } = useTheme();

    const [isDownload, setIsDownload] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [fieldsData, setFieldsData] = useState<any[]>([])

    const handleEdit = (column: IColumn[]) => {
        fileStore.getColumns(column)
        navigation.navigate("Create")
    }

    const handleDelete = (history: IHistory) => {
        userStore.removeHistory(history)
    }

    const openDownload = (history: IHistory) => {
        setFieldsData(history.data)
        setIsDownload(true)
    }

    const handleDownload = () => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1260);
    }

    return (
        <Container>
            {
                isDownload && <DownloadView
                    handleDownload={handleDownload}
                    setIsGenerated={setIsDownload}
                    loading={loading}
                    colors={theme.colors}
                />
            }
            <View style={generalStyles.generalContainer}>
                {
                    userStore.history.length === 0 ?
                        (
                            <View style={homeStyles.containerNotFields}>
                                <Text style={homeStyles.titleNotFields}>
                                    {i18n.t("historyEmpty")}
                                </Text>
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
                                keyExtractor={(column) => String(column.id)}
                            />
                        )
                }
            </View>
        </Container>
    )
})

export default History