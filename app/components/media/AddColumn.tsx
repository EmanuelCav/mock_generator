import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { AddColumnPropsType } from "../../types/home.types";

const AddColumn = ({ openForm, t }: AddColumnPropsType) => {
    return (
        <View className="w-[55%]">
            <Pressable
                onPress={openForm}
                className="flex-row items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-4 active:opacity-80"
            >
                <Feather
                    name="plus"
                    size={20}
                    color="#FFFFFF"
                />

                <Text className="text-base font-bold text-white">
                    {t("addField")}
                </Text>
            </Pressable>
        </View>
    );
};

export default AddColumn;