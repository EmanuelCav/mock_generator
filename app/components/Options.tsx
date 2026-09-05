import { useState } from "react";
import {
    Pressable,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { observer } from "mobx-react-lite";

import ContainerBackground from "./ContainerBackground";

import { OptionsPropsType } from "../types/home.types";
import { FormatOption } from "../types/general.types";

import { fileStore } from "../store/file.store";

import { formatsAvailable } from "../utils/data";

const Options = observer(({ handleClose, handleOption, t }: OptionsPropsType) => {

    const [headers, setHeaders] = useState<boolean>(fileStore.header_csv);
    const [arrayJson, setArrayJson] = useState<boolean>(fileStore.json_array);
    const [rootElement, setRootElement] = useState<string>(fileStore.root_element_xml);
    const [recordElement, setRecordElement] = useState<string>(fileStore.record_element_xml);
    const [tableName, setTableName] = useState<string>(fileStore.table_name_sql);

    const [localRows, setLocalRows] = useState<string>(fileStore.rows);
    const [error, setError] = useState<string>("");

    const [openFormat, setOpenFormat] = useState<boolean>(false);
    const [valueFormat, setValueFormat] = useState<string>(fileStore.format);
    const [itemsFormat, setItemsFormat] = useState<FormatOption[]>(formatsAvailable);

    const handleRowsChange = (text: string) => {
        setLocalRows(text);
    };

    const handleRootElement = (text: string) => {
        setRootElement(text);
    };

    const handleRecordElement = (text: string) => {
        setRecordElement(text);
    };

    const handleTableName = (text: string) => {
        setTableName(text);
    };

    const toggleSwitchHeaders = () => {
        const newValue = !headers;

        setHeaders(newValue);
        fileStore.updateHeaderCsv(newValue);
    };

    const toggleSwitchArray = () => {
        const newValue = !arrayJson;

        setArrayJson(newValue);
        fileStore.updateArrayJson(newValue);
    };

    const handleAccept = () => {

        if (valueFormat === "xml" && !recordElement.trim()) {
            setError(t("errorRecord"));
            return;
        }

        if (valueFormat === "xml" && !rootElement.trim()) {
            setError(t("errorRoot"));
            return;
        }

        if (valueFormat === "sql" && !tableName.trim()) {
            setError(t("errorTableName"));
            return;
        }

        handleOption({
            format: valueFormat,
            rows: localRows === "" ? "1000" : localRows,
            header_csv: headers,
            json_array: arrayJson,
            record_element_xml: recordElement,
            root_element_xml: rootElement,
            table_name_sql: tableName,
        });

        setError("");
    };

    return (
        <ContainerBackground
            isField={false}
            onClose={() => {
                setError("");
                handleClose();
            }}
        >
            <View className="w-full gap-4 px-5">

                <View>
                    <Text className="mb-2 text-base font-bold text-black dark:text-white">
                        {t("rows")}
                    </Text>

                    <TextInput
                        keyboardType="numeric"
                        value={localRows}
                        onChangeText={handleRowsChange}
                        maxLength={8}
                        placeholder={t("rows")}
                        placeholderTextColor="#9CA3AF"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                </View>


                <View className="z-50">
                    <Text className="mb-2 text-base font-bold text-black dark:text-white">
                        {t("formatfile")}
                    </Text>

                    <DropDownPicker
                        open={openFormat}
                        value={valueFormat}
                        items={itemsFormat}
                        setOpen={setOpenFormat}
                        setValue={setValueFormat}
                        setItems={setItemsFormat}
                        style={{
                            borderColor: "#D1D5DB",
                            backgroundColor: "#FFFFFF",
                        }}
                        dropDownContainerStyle={{
                            borderColor: "#D1D5DB",
                            backgroundColor: "#FFFFFF",
                        }}
                        textStyle={{
                            color: "#000000",
                        }}
                        zIndex={5000}
                        zIndexInverse={1000}
                    />
                </View>


                {valueFormat === "csv" && (
                    <View className="flex-row items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-zinc-700 dark:bg-zinc-900">

                        <Text className="flex-1 text-base text-black dark:text-white">
                            {t("defaultHeader")}
                        </Text>

                        <Switch
                            value={headers}
                            onValueChange={toggleSwitchHeaders}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#81C784",
                            }}
                            thumbColor={headers ? "#50C878" : "#F4F3F4"}
                        />

                    </View>
                )}


                {valueFormat === "json" && (
                    <View className="flex-row items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-zinc-700 dark:bg-zinc-900">

                        <Text className="flex-1 text-base text-black dark:text-white">
                            {t("includeArray")}
                        </Text>

                        <Switch
                            value={arrayJson}
                            onValueChange={toggleSwitchArray}
                            trackColor={{
                                false: "#D1D5DB",
                                true: "#81C784",
                            }}
                            thumbColor={arrayJson ? "#50C878" : "#F4F3F4"}
                        />

                    </View>
                )}


                {valueFormat === "xml" && (
                    <View>
                        <Text className="mb-2 text-base font-bold text-black dark:text-white">
                            {t("datasetLabel")}
                        </Text>

                        <TextInput
                            placeholder={t("datasetLabel")}
                            placeholderTextColor="#9CA3AF"
                            autoCapitalize="none"
                            value={rootElement}
                            onChangeText={handleRootElement}
                            maxLength={30}
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        />
                    </View>
                )}


                {valueFormat === "xml" && (
                    <View>
                        <Text className="mb-2 text-base font-bold text-black dark:text-white">
                            {t("recordLabel")}
                        </Text>

                        <TextInput
                            placeholder={t("recordLabel")}
                            placeholderTextColor="#9CA3AF"
                            autoCapitalize="none"
                            value={recordElement}
                            onChangeText={handleRecordElement}
                            maxLength={30}
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        />
                    </View>
                )}


                {valueFormat === "sql" && (
                    <View>
                        <Text className="mb-2 text-base font-bold text-black dark:text-white">
                            {t("tableNameSql")}
                        </Text>

                        <TextInput
                            placeholder={t("tableNameSql")}
                            placeholderTextColor="#9CA3AF"
                            autoCapitalize="none"
                            value={tableName}
                            onChangeText={handleTableName}
                            maxLength={30}
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                        />
                    </View>
                )}


                {error !== "" && (
                    <Text className="text-center text-sm font-medium text-red-500">
                        {error}
                    </Text>
                )}


                <Pressable
                    onPress={handleAccept}
                    className="mt-2 w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 active:opacity-80"
                >
                    <Text className="text-base font-bold text-white">
                        {t("accept")}
                    </Text>
                </Pressable>

            </View>
        </ContainerBackground>
    );
});

export default Options;