import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';

import { ColumnPropsType } from '../types/home.types';

import { homeStyles } from '../styles/home.styles';

const Column = ({ column, removeColumn, openEdit, colors, onLongPress, isActive }: ColumnPropsType) => {
    return (
        <Pressable
            onLongPress={onLongPress}
            delayLongPress={150}
            style={[
                homeStyles.containColumn,
                {
                    backgroundColor: colors.primary,
                    opacity: isActive ? 0.75 : 1,
                    transform: [{ scale: isActive ? 0.98 : 1 }],
                },
            ]}
        >
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
        </Pressable>
    )
}

export default Column