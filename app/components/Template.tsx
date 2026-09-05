import { Pressable, Text, View } from "react-native";

import { TemplatePropsType } from "../types/template.types";

const Template = ({ template, getTemplate, t }: TemplatePropsType) => {
    return (
        <View className="mx-4 mb-4 rounded-2xl bg-white p-5 shadow-sm dark:bg-zinc-900">

            <Text className="text-center text-lg font-bold text-black dark:text-white">
                {template.title.toUpperCase()}
            </Text>

            <View className="mt-4">

                <Text className="mb-2 font-semibold text-black underline dark:text-white">
                    {t("columnsText")}:
                </Text>

                <View className="flex-row flex-wrap">

                    {template.data.map((column, index) => (
                        <Text
                            key={index}
                            className="text-sm text-gray-600 dark:text-gray-300"
                        >
                            {column.fieldName}
                            {index === template.data.length - 1 ? "" : ", "}
                        </Text>
                    ))}

                </View>

            </View>

            <View className="my-5 h-px bg-gray-200 dark:bg-zinc-700" />

            <Pressable
                onPress={() => getTemplate(template.data)}
                className="items-center justify-center rounded-xl bg-emerald-500 px-5 py-4 active:opacity-80"
            >
                <Text className="text-base font-bold text-white">
                    {t("use")}
                </Text>
            </Pressable>

        </View>
    );
};

export default Template;