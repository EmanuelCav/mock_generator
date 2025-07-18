import { FlatList, View } from "react-native"
import { Text, useTheme } from "@rneui/themed"

import Container from "../../ContainerGeneral"
import HistoryElement from "../components/HistoryElement";

import { IColumn } from "../interface/Column";
import { IHistory } from "../interface/User";

import { generalStyles } from "../styles/general.styles"
import { homeStyles } from "../styles/home.styles";

import { StackNavigation } from "../types/general.types";

import { userStore } from "../store/user.store";

const History = ({ navigation }: { navigation: StackNavigation }) => {

    const { theme } = useTheme();

    const handleEdit = (column: IColumn[]) => {
        navigation.navigate("Home")
    }

    const handleDownload = (history: IHistory) => {

    }

    return (
        <Container>
            <View style={generalStyles.generalContainer}>
                {
                    !userStore.history ?
                        (
                            <View style={homeStyles.containerNotFields}>
                                <Text style={homeStyles.titleNotFields}>
                                    There are not fields! Start to add
                                </Text>
                            </View>
                        ) : (
                            <FlatList
                                data={userStore.history}
                                renderItem={({ item }) => <HistoryElement
                                    handleDownload={handleDownload}
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
}

export default History