import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import i18n from '../../../i18n';

import ContainerBackground from "../ContainerBackground"
import Close from "../Close"

import { FormEditPropsType } from "../../types/home.types"

import { column, fieldDefaultValue } from '../../utils/topics';
import TypeInput from './components/TypeInput';

const FormEdit = ({ colors, handleClose, field, handleEdit }: FormEditPropsType) => {

    const [title, setTitle] = useState<string>(field.fieldName)
    const [blank, setBlank] = useState<string>(String(field.blank));
    const [min, setMin] = useState<string>(field.min === undefined ? String(fieldDefaultValue(field.topic).min) : String(field.min))
    const [max, setMax] = useState<string>(field.max === undefined ? String(fieldDefaultValue(field.topic).max) : String(field.max))

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
                {i18n.t("blankLabel")}
            </Text>

            <Input
                keyboardType="numeric"
                style={{ color: colors.white }}
                value={blank}
                onChangeText={setBlank}
                maxLength={3}
            />

            {
                column.find((col) => col.name === field.topic)?.type.map((input, index) => {
                    return <TypeInput
                        colors={colors}
                        setValue={input === "min" ? setMin : setMax}
                        value={input === "min" ? min : max}
                        label={input === "min" ? i18n.t("minValue") : i18n.t("maxValue")}
                        key={index}
                    />
                })
            }

            <Button
                title={i18n.t("accept")}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
                onPress={() => handleEdit({
                    data: field.data(Number(min), Number(max)),
                    blank: Number(blank),
                    fieldName: title,
                    id: field.id,
                    topic: field.topic
                })}
            />

        </ContainerBackground>
    )
}

export default FormEdit