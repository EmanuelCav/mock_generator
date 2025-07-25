import { FlatList, View } from "react-native"
import { observer } from "mobx-react-lite"
import { useTheme } from "@rneui/themed"

import Container from "../../ContainerGeneral"
import Template from "../components/Template"
import Banner from "../components/Banner"

import { generalStyles } from "../styles/general.styles"

import { templatesData } from "../utils/templates"

const Templates = observer(() => {

    const { theme } = useTheme()

    return (
        <Container>
            <Banner />
            <View style={generalStyles.generalContainer}>
                <FlatList
                    data={templatesData}
                    renderItem={({ item }) =>
                        <Template
                            colors={theme.colors}
                            template={item}
                        />}
                    keyExtractor={(_, index) => String(index)}
                />
            </View>
        </Container>
    )
})

export default Templates