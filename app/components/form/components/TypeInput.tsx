import { Dimensions } from "react-native"
import { Input, Text } from "@rneui/themed"

import { TypeInputPropsType } from "../../../types/home.types"

const TypeInput = ({ value, setValue, colors, label }: TypeInputPropsType) => {
    return (
        <>
            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                {label}
            </Text>

            <Input
                keyboardType="numeric"
                style={{ color: colors.white }}
                value={value}
                onChangeText={setValue}
                maxLength={3}
            />
        </>
    )
}

export default TypeInput