import { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Button, Input, Text } from '@rneui/themed';
import i18n from '../../../i18n';

import ContainerBackground from "../ContainerBackground"
import Close from "../Close"

import TypeInput from './components/TypeInput';
import DateInput from './components/DateInput';

import { FormEditPropsType } from "../../types/home.types"

import { column, fieldDefaultValue } from '../../utils/topics';

const FormEdit = ({ colors, handleClose, field, handleEdit }: FormEditPropsType) => {

    const [isError, setIsError] = useState<string>("")
    const [title, setTitle] = useState<string>(field.fieldName)
    const [blank, setBlank] = useState<string>(String(field.blank));
    const [min, setMin] = useState<string>(field.min === undefined ? String(fieldDefaultValue(field.topic).min) : String(field.min))
    const [max, setMax] = useState<string>(field.max === undefined ? String(fieldDefaultValue(field.topic).max) : String(field.max))
    const [arrayElements, setArrayElements] = useState<string[]>(field.array === undefined ? [] : field.array)
    const [valueElement, setValueElement] = useState<string>("")

    return (
        <ContainerBackground colors={colors} isField={true}>

            <Close handleClose={() => {
                handleClose()
                setValueElement("")
                setIsError("")
            }} />

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

            {
                field.topic !== "Array elements" &&
                <Text style={{
                    marginBottom: Dimensions.get("window").height / 143,
                    fontWeight: 'bold',
                    color: colors.white
                }}>
                    {i18n.t("blankLabel")}
                </Text>
            }

            {
                field.topic !== "Array elements" &&
                <Input
                    keyboardType="numeric"
                    style={{ color: colors.white }}
                    value={blank}
                    onChangeText={(text) => {
                        let numericValue = text.replace(/[^0-9]/g, '');

                        if (numericValue.length > 1) {
                            numericValue = numericValue.replace(/^0+/, '');
                        }

                        const number = parseInt(numericValue, 10);

                        if (numericValue === '') {
                            setBlank('');
                        } else if (!isNaN(number) && number >= 0 && number <= 100) {
                            setBlank(numericValue);
                        }
                    }}
                    maxLength={3}
                />
            }

            {
                isError && <Text style={{ color: "#f00", marginBottom: Dimensions.get("window").height / 74 }}>
                    {isError}
                </Text>
            }

            {
                column.find((col) => col.name === field.topic)?.type.map((input, index) => {
                    return <View key={index}>
                        {
                            (input === "maxDate" || input === "minDate") ? (
                                <DateInput
                                    colors={colors}
                                    value={input === "minDate" ? min : max}
                                    setValue={input === "minDate" ? setMin : setMax}
                                    label={input === "minDate" ? i18n.t("selectMinDate") : i18n.t("selectMaxDate")}
                                    labelSelected={input === "minDate" ? i18n.t("minDate") : i18n.t("maxDate")}
                                    topic={field.topic}
                                />
                            ) : (
                                <TypeInput
                                    colors={colors}
                                    setValue={input === "min" ? setMin : setMax}
                                    value={input === "min" ? min : max}
                                    label={input === "min" ? i18n.t("minValue") : i18n.t("maxValue")}
                                    topic={field.topic}
                                />
                            )
                        }
                    </View>
                })
            }

            {
                field.topic === "Array elements" &&
                <>
                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        fontWeight: 'bold',
                        color: colors.white
                    }}>
                        {i18n.t("elementName")}
                    </Text>
                    <Input
                        placeholder={i18n.t("elementNamePlaceholder")}
                        autoCapitalize="none"
                        value={valueElement}
                        onChangeText={setValueElement}
                        maxLength={30}
                        inputStyle={{ color: colors.white }}
                    />
                </>
            }

            {
                field.topic === "Array elements" &&
                <View style={{ marginBottom: Dimensions.get("window").height / 74 }}>
                    <Button
                        icon={{
                            name: 'add',
                            color: '#50C878',
                        }}
                        title={i18n.t("addElement")}
                        type="clear"
                        titleStyle={{ color: "#50C878" }}
                        onPress={() => {
                            if (valueElement === "") {
                                setIsError(i18n.t("errorAddElement"))
                                return
                            }

                            setArrayElements([...arrayElements, valueElement])
                            setValueElement("")
                            setIsError("")
                        }}
                    />
                </View>
            }


            {
                field.topic === "Array elements" && arrayElements.length > 0 &&
                <View style={{ marginBottom: Dimensions.get("window").height / 74, flexDirection: "row", flexWrap: "wrap" }}>
                    <Text style={{
                        marginBottom: Dimensions.get("window").height / 143,
                        marginRight: Dimensions.get("window").width / 143,
                        fontWeight: 'bold',
                        color: colors.white
                    }}>
                        {i18n.t("elements")}:
                    </Text>
                    {
                        field.topic === "Array elements" && arrayElements.map((element, index) => {
                            return <View style={{ marginLeft: Dimensions.get("window").width / 120 }} key={index}>
                                <Text>{element}{index === arrayElements.length - 1 ? "" : ","}</Text>
                            </View>
                        })
                    }
                </View>
            }

            <Button
                title={i18n.t("accept")}
                buttonStyle={{
                    backgroundColor: "#50C878"
                }}
                onPress={() => {

                    const maxValueSelected = max.split("T").length > 1 ? Number(max.split("T")[0].split("-")[0]) : Number(max)
                    const minValueSelected = min.split("T").length > 1 ? Number(min.split("T")[0].split("-")[0]) : Number(min)

                    if (minValueSelected >= maxValueSelected) {
                        setIsError(i18n.t("minHigherThanMax"))
                        return
                    }

                    handleEdit({
                        max: maxValueSelected,
                        min: minValueSelected,
                        data: field.data,
                        blank: Number(blank),
                        fieldName: title,
                        id: field.id,
                        array: arrayElements.length > 0 ? arrayElements : undefined,
                        topic: field.topic
                    })

                    setIsError("")
                    setValueElement("")
                }}
            />

        </ContainerBackground>
    )
}

export default FormEdit