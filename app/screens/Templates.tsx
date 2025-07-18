import { View } from "react-native"
import { Text } from "@rneui/themed"

import Container from "../../ContainerGeneral"

import { generalStyles } from "../styles/general.styles"

const Templates = () => {
    return (
        <Container>
            <View style={generalStyles.generalContainer}>
                <Text>Templates</Text>
            </View>
        </Container>
    )
}

export default Templates