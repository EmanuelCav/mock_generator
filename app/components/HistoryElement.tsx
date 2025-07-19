import { Dimensions, View } from "react-native"
import { Icon, ListItem, Text } from '@rneui/themed'
import i18n from "../../i18n"

import { HistoryElementPropsType } from "../types/history.types"

import { historyStyles } from "../styles/history.styles"

const HistoryElement = ({ colors, history, openDownload, handleEdit, handleDelete }: HistoryElementPropsType) => {
    return (
        <ListItem bottomDivider
            containerStyle={{
                backgroundColor: colors.primary,
                marginVertical: Dimensions.get("window").height / 92.5,
                justifyContent: 'space-between',
                alignItems: 'center',
                height: Dimensions.get("window").height / 4
            }}>
            <View>
                <ListItem.Title
                    style={{ color: colors.white, fontWeight: '700' }}>
                    {history.name}
                </ListItem.Title>
                <ListItem.Subtitle
                    style={{ color: colors.white }}>
                    {i18n.t("generatedOn")} {history.date}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: colors.white }}>
                    <View>
                        <Text style={{
                            marginVertical: Dimensions.get("window").height / 247, fontWeight: '700',
                            textDecorationLine: 'underline'
                        }}>
                            {i18n.t("fields")}:
                        </Text>
                        {
                            history.columns
                                .slice(0, history.columns.length < 3 ? history.columns.length : 3)
                                .map((column) => {
                                    return <Text>- {column.fieldName}</Text>
                                })
                        }
                        {
                            history.columns.length > 3 && <Text>
                                {`${i18n.t("and")} ${history.columns.length - 3} ${i18n.t("more")} ...`}
                            </Text>
                        }
                    </View>
                </ListItem.Subtitle>
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
                    name="download"
                    color="#50C878"
                    size={30}
                    onPress={() => openDownload(history)}
                />
            </View>
        </ListItem>
    )
}

export default HistoryElement