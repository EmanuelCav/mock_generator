import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ContainerBackground from "../ContainerBackground";

import TypeInput from './components/TypeInput';
import DateInput from './components/DateInput';

import { FormEditPropsType } from "../../types/home.types";

import { column, fieldDefaultValue } from '../../utils/topics';

const FormEdit = ({ handleClose, field, handleEdit, t }: FormEditPropsType) => {

    const [isError, setIsError] = useState<string>("");
    const [title, setTitle] = useState<string>(field.fieldName);
    const [blank, setBlank] = useState<string>(String(field.blank));
    const [min, setMin] = useState<string>(
        field.min === undefined
            ? String(fieldDefaultValue(field.topic).min)
            : String(field.min)
    );
    const [max, setMax] = useState<string>(
        field.max === undefined
            ? String(fieldDefaultValue(field.topic).max)
            : String(field.max)
    );
    const [arrayElements, setArrayElements] = useState<string[]>(
        field.array === undefined ? [] : field.array
    );
    const [valueElement, setValueElement] = useState<string>("");

    return (
        <ContainerBackground title={title} onClose={() => {
            handleClose();
            setValueElement("");
            setIsError("");
        }}>

            <Text className="mb-2 text-base font-bold text-black dark:text-white">
                {t("fieldName")}
            </Text>

            <TextInput
                placeholder={t("fieldNamePlaceholder")}
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                value={title}
                onChangeText={setTitle}
                maxLength={30}
                className="mb-5 rounded-lg border border-gray-300 bg-white px-4 py-3 text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />

            {field.topic !== "Array elements" && (
                <Text className="mb-2 text-base font-bold text-black dark:text-white">
                    {t("blankLabel")}
                </Text>
            )}

            {field.topic !== "Array elements" && (
                <TextInput
                    keyboardType="numeric"
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
                    className="mb-5 rounded-lg border border-gray-300 bg-white px-4 py-3 text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
            )}

            {isError && (
                <Text className="mb-4 text-red-500">
                    {isError}
                </Text>
            )}

            {column.find((col) => col.name === field.topic)?.type.map((input, index) => {
                return (
                    <View key={index}>
                        {(input === "maxDate" || input === "minDate") ? (
                            <DateInput
                                value={input === "minDate" ? min : max}
                                setValue={input === "minDate" ? setMin : setMax}
                                label={input === "minDate" ? t("selectMinDate") : t("selectMaxDate")}
                                labelSelected={input === "minDate" ? t("minDate") : t("maxDate")}
                                topic={field.topic}
                            />
                        ) : (
                            <TypeInput
                                setValue={input === "min" ? setMin : setMax}
                                value={input === "min" ? min : max}
                                label={input === "min" ? t("minValue") : t("maxValue")}
                                topic={field.topic}
                            />
                        )}
                    </View>
                );
            })}

            {field.topic === "Array elements" && (
                <>
                    <Text className="mb-2 text-base font-bold text-black dark:text-white">
                        {t("elementName")}
                    </Text>

                    <TextInput
                        placeholder={t("elementNamePlaceholder")}
                        placeholderTextColor="#9CA3AF"
                        autoCapitalize="none"
                        value={valueElement}
                        onChangeText={setValueElement}
                        maxLength={30}
                        className="mb-5 rounded-lg border border-gray-300 bg-white px-4 py-3 text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                </>
            )}

            {field.topic === "Array elements" && (
                <View className="mb-5">
                    <TouchableOpacity
                        className="flex-row items-center justify-center rounded-lg border border-[#50C878] py-3"
                        onPress={() => {

                            if (valueElement === "") {
                                setIsError(t("errorAddElement"));
                                return;
                            }

                            setArrayElements([...arrayElements, valueElement]);
                            setValueElement("");
                            setIsError("");
                        }}
                    >
                        <Ionicons name="add" size={20} color="#50C878" />

                        <Text className="ml-2 font-semibold text-[#50C878]">
                            {t("addElement")}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            {field.topic === "Array elements" && arrayElements.length > 0 && (
                <View className="mb-5 flex-row flex-wrap items-center">

                    <Text className="mr-2 mb-2 font-bold text-black dark:text-white">
                        {t("elements")}:
                    </Text>

                    {arrayElements.map((element, index) => (
                        <View className="mr-1 mb-2" key={index}>
                            <Text className="text-black dark:text-white">
                                {element}{index === arrayElements.length - 1 ? "" : ","}
                            </Text>
                        </View>
                    ))}

                </View>
            )}

            <TouchableOpacity
                className="flex-row items-center justify-center rounded-lg bg-emerald-500 px-4 py-4"
                onPress={() => {

                    const maxValueSelected =
                        max.split("T").length > 1
                            ? Number(max.split("T")[0].split("-")[0])
                            : Number(max);

                    const minValueSelected =
                        min.split("T").length > 1
                            ? Number(min.split("T")[0].split("-")[0])
                            : Number(min);

                    if (minValueSelected >= maxValueSelected) {
                        setIsError(t("minHigherThanMax"));
                        return;
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
                    });

                    setIsError("");
                    setValueElement("");
                }}
            >
                <Text className="font-bold text-white">
                    {t("accept")}
                </Text>
            </TouchableOpacity>

        </ContainerBackground>
    );
};

export default FormEdit;