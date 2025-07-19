import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import i18n from '../../../i18n';

import ContainerBackground from "../ContainerBackground"
import Close from "../Close"

import { FormEditPropsType } from "../../types/home.types"

const FormEdit = ({ colors, handleClose, field }: FormEditPropsType) => {

    const [title, setTitle] = useState<string>(field.fieldName)
    const [blank, setBlank] = useState<string>(String(field.blank));

    return (
        <ContainerBackground colors={colors}>

            <Close handleClose={handleClose} />

            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                {i18n.t("fieldName")}
            </Text>

            <Input
                placeholder={i18n.t("fieldNamePlaceholder")}
                autoCapitalize="none"
                value={title}
                onChangeText={setTitle}
                maxLength={30}
                inputStyle={{ color: colors.white }}
            />

            <Text style={{
                marginBottom: Dimensions.get("window").height / 143,
                fontWeight: 'bold',
                color: colors.white
            }}>
                {i18n.t("defaultRows")}
            </Text>

            <Input
                keyboardType="numeric"
                style={{ color: colors.white }}
                value={blank}
                onChangeText={setBlank}
                maxLength={6}
            />

            <Button
                title={i18n.t("accept")}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
                onPress={() => {
                    // handleOption({
                    //     areHeaders: headers,
                    //     format: valueFormat,
                    //     rows: localRows === "" ? "1000" : localRows
                    // })
                }}
            />

        </ContainerBackground>
    )
}

export default FormEdit