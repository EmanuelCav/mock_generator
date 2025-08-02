import { Dimensions, View } from 'react-native'
import { Button, Card } from '@rneui/themed'
import i18n from '../../i18n'

import { TemplatePropsType } from '../types/template.types'

const Template = ({ template, colors, getTemplate }: TemplatePropsType) => {
    return (
        <Card containerStyle={{ backgroundColor: colors.primary }}>
            <Card.Title style={{ color: colors.white, fontSize: Dimensions.get("window").height / 56 }}>
                {template.title.toUpperCase()}
            </Card.Title>
            <Card.FeaturedSubtitle style={{ textDecorationLine: "underline" }}>
                {i18n.t("columnsText")}:
            </Card.FeaturedSubtitle>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {
                    template.data.map((column, index) => {
                        return <Card.FeaturedSubtitle key={index}
                            style={{ marginLeft: Dimensions.get("window").width / 120 }}>
                            {column.fieldName}{index === template.data.length - 1 ? "" : ","}
                        </Card.FeaturedSubtitle>
                    })
                }
            </View>
            <Card.Divider />
            <Button
                title={i18n.t("use")}
                onPress={() => getTemplate(template.data)}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
            />
        </Card>

    )
}

export default Template