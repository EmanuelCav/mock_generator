import { Pressable } from "react-native"

import { Text } from "@rneui/themed"

import { ColumnSelectPropsType } from "../../../types/home.types"

const ColumnSelect = ({ element, setColumnData }: ColumnSelectPropsType) => {
    return (
        <Pressable style={({ pressed }) => ({
            backgroundColor: pressed ? "red" : "blue"
        })} onPress={() => setColumnData(element.name)}>
            <Text>{element.name}</Text>
        </Pressable>
    )
}

export default ColumnSelect