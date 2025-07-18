import { Dimensions, View } from "react-native"
import { Icon, ListItem, Text } from '@rneui/themed'

import { HistoryElementPropsType } from "../types/history.types"

const HistoryElement = ({ colors, history, handleDownload, handleEdit }: HistoryElementPropsType) => {
    return (
        <ListItem bottomDivider
            containerStyle={{
                backgroundColor: colors.primary,
                marginVertical: Dimensions.get("window").height / 92.5,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <View>
                <ListItem.Title
                    style={{ color: colors.white, fontWeight: '700' }}>
                    {history.name}
                </ListItem.Title>
                <ListItem.Subtitle
                    style={{ color: colors.white }}>
                    {history.name}
                </ListItem.Subtitle>
                <ListItem.Subtitle
                    style={{ color: colors.white }}>
                    Columns:
                    {
                        history.columns
                            .slice(0, history.columns.length < 3 ? history.columns.length : 3)
                            .map((column) => {
                                return <Text>{column.fieldName}</Text>
                            })
                    }
                </ListItem.Subtitle>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name="edit"
                    color="#00ff00"
                    size={30}
                    style={{ marginRight: Dimensions.get("window").width / 25 }}
                    onPress={() => handleEdit(history.columns)}
                />
                <Icon
                    name="delete"
                    color="#ff0000"
                    size={30}
                    onPress={() => handleDownload(history)}
                />
            </View>
        </ListItem>
    )
}

export default HistoryElement