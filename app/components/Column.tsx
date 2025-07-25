import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

import { ColumnPropsType } from '../types/home.types';

import { homeStyles } from '../styles/home.styles';

const Column = ({ column, removeColumn, openEdit, colors }: ColumnPropsType) => {
    return (
        <View style={[homeStyles.containColumn, { backgroundColor: colors.primary }]}>
            <View>
                <Text style={[homeStyles.titleColumn, { color: colors.white }]}>
                    {column.fieldName}
                </Text>
                <Text style={[homeStyles.subtitleColumn, { color: colors.white }]}>
                    {column.topic}
                </Text>
            </View>
            <View style={homeStyles.actionsColumn}>
                <TouchableOpacity onPress={() => openEdit(column)}>
                    <Icon
                        name="edit"
                        color="#50C878"
                        size={30}
                        containerStyle={homeStyles.iconSpacing}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeColumn(column)}>
                    <Icon
                        name="delete"
                        color="#ff0000"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Column;
