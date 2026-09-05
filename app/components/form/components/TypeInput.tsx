import { Text, TextInput, View } from "react-native";

import { TypeInputPropsType } from "../../../types/home.types";

import { topicsLowLength } from "../../../utils/topics";

const TypeInput = ({ value, setValue, label, topic }: TypeInputPropsType) => {

    const handleChange = (text: string) => {
        const regex =
            topic === "Number" || topic === "Float number"
                ? /^-?\d*$/
                : /^\d*$/;

        if (regex.test(text)) {
            setValue(text);
        }
    };

    return (
        <View className="mb-5">

            <Text className="mb-2 text-base font-bold text-black dark:text-white">
                {label}
            </Text>

            <TextInput
                keyboardType="numeric"
                value={value}
                onChangeText={handleChange}
                maxLength={topicsLowLength(topic)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-black dark:border-gray-700 dark:bg-neutral-900 dark:text-white"
                placeholderTextColor="#9CA3AF"
            />

        </View>
    );
};

export default TypeInput;