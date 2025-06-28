import { Pressable } from "react-native"

import { Text } from "@rneui/themed"

import { ColumnSelectPropsType } from "../../../types/home.types"

import { homeStyles } from "../../../styles/home.styles"

const ColumnSelect = ({ element, columnData, setColumnData, colors }: ColumnSelectPropsType) => {
    return (
        <Pressable style={[{
            backgroundColor: columnData === element.name ? "#50C878" : colors.primary,
        }, homeStyles.columnSelect]} onPress={() => setColumnData(element.name)}>
            <Text style={{
                color: columnData === element.name ? "#FFFFFF" : colors.white,
                fontWeight: columnData === element.name ? "bold" : '600',
            }}>
                {element.name}
            </Text>
        </Pressable>
    )
}

export default ColumnSelect