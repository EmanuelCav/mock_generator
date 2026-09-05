import { Pressable, Text, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import { HistoryElementPropsType } from "../types/history.types";

import { extensionFile } from "../utils/data";

const HistoryElement = ({ history, openDownload, handleEdit, handleDelete, t }: HistoryElementPropsType) => {

    return (
        <View className="mx-4 mb-4 flex-row rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-900">

            <View className="flex-1">

                <Text className="text-lg font-bold text-black dark:text-white">
                    {`${history.name}.${extensionFile(history.extension)}`}
                </Text>

                <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {t("generatedOn")} {history.date}
                </Text>

                <View className="mt-4">

                    <Text className="mb-2 font-bold text-black underline dark:text-white">
                        {t("fields")}:
                    </Text>

                    {history.columns
                        .slice(0, 3)
                        .map((column, index) => (

                            <Text
                                key={index}
                                className="text-sm text-gray-700 dark:text-gray-300"
                            >
                                - {column.fieldName}
                            </Text>

                        ))}

                    {history.columns.length > 3 && (

                        <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {`${t("and")} ${history.columns.length - 3} ${t("more")}...`}
                        </Text>

                    )}

                </View>

            </View>


            <View className="ml-3 justify-between">

                <Pressable
                    onPress={() => handleDelete(history)}
                    className="p-2 active:opacity-60"
                >
                    <Feather
                        name="trash-2"
                        color="#FF0000"
                        size={24}
                    />
                </Pressable>

                <Pressable
                    onPress={() => handleEdit(history.columns)}
                    className="p-2 active:opacity-60"
                >
                    <Feather
                        name="edit"
                        color="#50C878"
                        size={24}
                    />
                </Pressable>


                <Pressable
                    onPress={() => openDownload(history)}
                    className="p-2 active:opacity-60"
                >
                    <MaterialIcons
                        name="file-download"
                        color="#50C878"
                        size={26}
                    />
                </Pressable>

            </View>

        </View>
    );
};

export default HistoryElement;