import { Dimensions, View } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';

import { ColumnPropsType } from '../types/home.types';

const Column = ({ column, removeColumn, openEdit, colors }: ColumnPropsType) => {
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
                    {column.fieldName}
                </ListItem.Title>
                <ListItem.Subtitle
                    style={{ color: colors.white }}>
                    {column.topic}
                </ListItem.Subtitle>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name="edit"
                    color="#50C878"
                    size={30}
                    style={{ marginRight: Dimensions.get("window").width / 25 }}
                    onPress={() => openEdit(column)}
                />
                <Icon
                    name="delete"
                    color="#ff0000"
                    size={30}
                    onPress={() => removeColumn(column)}
                />
            </View>
        </ListItem>
    );
};

export default Column;
