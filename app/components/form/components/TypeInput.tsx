import { Dimensions } from "react-native"
import { Input, Text } from "@rneui/themed"

import { TypeInputPropsType } from "../../../types/home.types"

import { topicsLowLength } from "../../../utils/topics"

const TypeInput = ({ value, setValue, colors, label, topic }: TypeInputPropsType) => {

    const handleChange = (text: string) => {
        let regex = (topic === "Number" || topic === "Float number") ? /^-?\d*$/ : /^\d*$/;

        if (regex.test(text)) {
            setValue(text);
        }
    }

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
                onChangeText={handleChange}
                maxLength={topicsLowLength(topic)}
            />
        </>
    )
}

export default TypeInput