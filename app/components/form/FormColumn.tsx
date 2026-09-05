import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import ContainerBackground from "../ContainerBackground";
import ColumnSelect from './components/ColumnSelect';

import { FormColumnPropsType } from '../../types/home.types';

import { column, topics } from '../../utils/topics';

const FormColumn = ({ handleClose, handleAddColumn, error, t }: FormColumnPropsType) => {

    const [open, setOpen] = useState<boolean>(false);
    const [columnData, setColumnData] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [value, setValue] = useState<string>("all topics");

    const items = useMemo(() => {
        return topics
            .map(item => ({
                ...item,
                label: t(`topics.${item.value}`),
                icon: () => (
                    <MaterialCommunityIcons
                        name={item.iconName as any}
                        size={18}
                        color="#666"
                    />
                ),
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [t]);

    const filteredColumns = useMemo(() => {
        return column
            .filter(col =>
                col.topic.find(
                    topic =>
                        topic === topics.find(top => top.value === value)?.label
                )
            )
            .map(col => ({
                ...col,
                translatedName: t(`columns.${col.name}`)
            }))
            .sort((a, b) =>
                a.translatedName.localeCompare(b.translatedName)
            );
    }, [value, t]);

    return (
        <ContainerBackground isField={false} onClose={handleClose}>

            <Text className="mb-2 text-base font-bold text-black dark:text-white">
                {t("fieldName")}
            </Text>

            {error && (
                <Text className="mb-3 font-bold text-red-500">
                    {error}
                </Text>
            )}

            <TextInput
                placeholder={t("fieldNamePlaceholder")}
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                value={title}
                onChangeText={setTitle}
                maxLength={30}
                className="mb-5 rounded-lg border border-gray-300 bg-white px-4 py-3 text-black dark:border-gray-700 dark:bg-neutral-900 dark:text-white"
            />

            <Text className="mb-2 text-base font-bold text-black dark:text-white">
                {t("topicFilter")}
            </Text>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                placeholder={t("topicFilterPlaceholder")}
                style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1D5DB"
                }}
                dropDownContainerStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#D1D5DB"
                }}
                textStyle={{
                    color: "#000000"
                }}
                listItemLabelStyle={{
                    color: "#000000"
                }}
                zIndex={3000}
                zIndexInverse={1000}
            />

            <Text className="mb-3 mt-5 text-base font-bold text-black dark:text-white">
                {t("selectType")} {value === "all topics" ? t("scrollDown") : ""}
            </Text>

            <ScrollView className="mb-4 max-h-80">

                {filteredColumns.map((element, index) => (
                    <ColumnSelect
                        columnData={columnData}
                        setColumnData={setColumnData}
                        element={{
                            ...element,
                            name: element.translatedName
                        }}
                        key={index}
                    />
                ))}

            </ScrollView>

            <TouchableOpacity
                disabled={columnData.length === 0}
                className={`items-center rounded-lg px-4 py-4 ${columnData.length === 0 ? "bg-gray-400" : "bg-[#50C878]"}`}
                onPress={() => {

                    const selectedColumn = column.find(
                        col => t(`columns.${col.name}`) === columnData
                    );

                    if (!selectedColumn) return;

                    handleAddColumn({
                        title: title === ""
                            ? columnData.toLowerCase()
                            : title,
                        columnData: selectedColumn.name,
                        data: selectedColumn.data
                    });
                }}
            >
                <Text className="font-bold text-white">
                    {t("add")}
                </Text>
            </TouchableOpacity>

        </ContainerBackground>
    );
};

export default FormColumn;