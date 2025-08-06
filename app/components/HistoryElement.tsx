import { Dimensions, View } from "react-native"
import { Icon, Text } from '@rneui/themed'
import i18n from "../../i18n"

import { HistoryElementPropsType } from "../types/history.types"

import { historyStyles } from "../styles/history.styles"

import { extensionFile } from "../utils/data"

const HistoryElement = ({ colors, history, openDownload, handleEdit, handleDelete }: HistoryElementPropsType) => {
    return (
        <View style={[historyStyles.containHistoryElements, { backgroundColor: colors.primary }]}>
            <View style={{ flex: 1 }}>
                <Text style={{ color: colors.white, fontWeight: '700', fontSize: Dimensions.get("window").height / 57 }}>
                    {`${history.name}.${extensionFile(history.extension)}`}
                </Text>
                <Text style={{ color: colors.white }}>
                    {i18n.t("generatedOn")} {history.date}
                </Text>
                <View>
                    <Text
                        style={{
                            marginVertical: Dimensions.get("window").height / 247,
                            fontWeight: '700',
                            textDecorationLine: 'underline',
                            color: colors.white
                        }}
                    >
                        {i18n.t("fields")}:
                    </Text>
                    {history.columns
                        .slice(0, history.columns.length < 3 ? history.columns.length : 3)
                        .map((column, index) => (
                            <Text key={index} style={{ color: colors.white }}>
                                - {column.fieldName}
                            </Text>
                        ))
                    }
                    {history.columns.length > 3 && (
                        <Text style={{ color: colors.white }}>
                            {`${i18n.t("and")} ${history.columns.length - 3} ${i18n.t("more")} ...`}
                        </Text>
                    )}
                </View>
            </View>

            <View style={historyStyles.containActions}>
                <Icon
                    name="delete"
                    color="#ff0000"
                    size={30}
                    onPress={() => handleDelete(history)}
                />
                <Icon
                    name="edit"
                    color="#50C878"
                    size={30}
                    onPress={() => handleEdit(history.columns)}
                />
                <Icon
                    name="exit-to-app"
                    color="#50C878"
                    size={30}
                    onPress={() => openDownload(history)}
                />
            </View>
        </View>
    )
}

export default HistoryElement
