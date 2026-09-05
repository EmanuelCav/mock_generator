import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ColumnPropsType } from "../types/home.types";

const Column = ({ column, removeColumn, openEdit, onLongPress, isActive }: ColumnPropsType) => {
    return (
        <Pressable
            onLongPress={onLongPress}
            delayLongPress={150}
            className={`mx-4 mb-3 flex-row items-center justify-between rounded-xl bg-emerald-500 px-4 py-4 shadow-sm ${isActive ? "opacity-75" : "opacity-100"}`}
            style={{
                transform: [{ scale: isActive ? 0.98 : 1 }],
            }}
        >
            <View className="flex-1 pr-4">
                <Text className="text-lg font-bold text-white">
                    {column.fieldName}
                </Text>

                <Text className="mt-1 text-sm text-white/80">
                    {column.topic}
                </Text>
            </View>

            <View className="flex-row items-center gap-3">
                <Pressable
                    onPress={() => openEdit(column)}
                    className="p-2 active:opacity-60"
                >
                    <Feather
                        name="edit"
                        color="#FFFFFF"
                        size={24}
                    />
                </Pressable>

                <Pressable
                    onPress={() => removeColumn(column)}
                    className="p-2 active:opacity-60"
                >
                    <Feather
                        name="trash-2"
                        color="#FF0000"
                        size={24}
                    />
                </Pressable>
            </View>
        </Pressable>
    )
}

export default Column