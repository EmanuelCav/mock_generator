import { Button, Card } from '@rneui/themed'
import i18n from '../../i18n'

import { TemplatePropsType } from '../types/template.types'

const Template = ({ template, colors }: TemplatePropsType) => {
    return (
        <Card containerStyle={{ backgroundColor: colors.primary }}>
            <Card.Title style={{ color: colors.white }}>
                {template.title}
            </Card.Title>
            <Card.Divider />
            <Button
                title={i18n.t("use")}
                onPress={() => console.log(`Click en ${template.title}`)}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
            />
        </Card>

    )
}

export default Template