import { Pressable, Text } from "react-native";

import { ColumnSelectPropsType } from "../../../types/home.types";

const ColumnSelect = ({ element, columnData, setColumnData }: ColumnSelectPropsType) => {

    const isSelected = columnData === element.name;

    return (
        <Pressable
            className={`mb-2 rounded-lg p-4 ${isSelected ? "bg-emerald-500" : "bg-emerald-800"}`}
            onPress={() => setColumnData(element.name)}
        >
            <Text className={`text-base ${isSelected ? "font-bold text-white" : "font-semibold text-white"}`}>
                {element.name}
            </Text>
        </Pressable>
    );
};

export default ColumnSelect;