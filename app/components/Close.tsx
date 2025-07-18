import { View } from "react-native"
import { Icon } from "@rneui/themed"

import { generalStyles } from "../styles/general.styles"

const Close = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <View style={generalStyles.containerClose}>
            <Icon
                name="close"
                color="#ff0000"
                size={26}
                onPress={handleClose}
                style={generalStyles.buttonClose}
            />
        </View>
    )
}

export default Close