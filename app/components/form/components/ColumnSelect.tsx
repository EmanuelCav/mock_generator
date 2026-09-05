import { Pressable, Text } from "react-native";

import { ColumnSelectPropsType } from "../../../types/home.types";

const ColumnSelect = ({ element, columnData, setColumnData }: ColumnSelectPropsType) => {

    const isSelected = columnData === element.name;

    return (
        <Pressable
            className={`mb-3 rounded-lg px-4 py-4 ${isSelected ? "bg-[#50C878]" : "bg-white dark:bg-neutral-900"}`}
            onPress={() => setColumnData(element.name)}
        >
            <Text className={`text-base ${isSelected ? "font-bold text-white" : "font-semibold text-black dark:text-white"}`}>
                {element.name}
            </Text>
        </Pressable>
    );
};

export default ColumnSelect;