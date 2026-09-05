import { useEffect, useState } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { observer } from "mobx-react-lite";
import { Ionicons } from "@expo/vector-icons";

import Container from "../components/ContainerGeneral";

import { FormatOption, LanguageOption } from "../types/general.types";

import { formatsAvailable } from "../utils/data";

import { fileStore } from "../store/file.store";

import { useLanguage } from "../hooks/useLanguageContext";
import { ThemeMode, useThemeMode } from "../hooks/useThemeContext";

const Config = observer(() => {

    const { t, changeLanguage, language } = useLanguage();
    const { themeMode, setThemeMode } = useThemeMode();

    const [openLanguage, setOpenLanguage] = useState(false);

    const itemsLanguage: LanguageOption[] = [
        {
            label: t("english"),
            value: "en",
        },
        {
            label: t("spanish"),
            value: "es",
        },
    ];

    const [openTheme, setOpenTheme] = useState(false);

    const itemsTheme = [
        {
            label: t("light"),
            value: "light" as ThemeMode,
        },
        {
            label: t("dark"),
            value: "dark" as ThemeMode,
        },
    ];

    const [localRows, setLocalRows] = useState<string>(
        fileStore.rows
    );

    const [fileName, setFileName] = useState<string>(
        fileStore.file_name
    );

    const [openFormat, setOpenFormat] = useState(false);

    const [valueFormat, setValueFormat] = useState<string>(
        fileStore.format.toLowerCase()
    );

    const [itemsFormat, setItemsFormat] =
        useState<FormatOption[]>(formatsAvailable);

    const handleLanguageChange = async (
        callback: (value: string) => string
    ) => {
        const newLanguage = callback(language);

        if (newLanguage === "en" || newLanguage === "es") {
            await changeLanguage(newLanguage);
        }
    };


    const handleThemeChange = async (
        callback: (value: ThemeMode) => ThemeMode
    ) => {
        const newTheme = callback(themeMode);

        if (
            newTheme === "light" ||
            newTheme === "dark"
        ) {
            await setThemeMode(newTheme);
        }
    };


    const handleRowsChange = (text: string) => {
        setLocalRows(text);
    };


    const handleRowsBlur = () => {
        const valueToSave =
            localRows.trim() === ""
                ? "1000"
                : localRows.trim();

        fileStore.updateRows(valueToSave);
    };


    const handleFileNameChange = (text: string) => {
        setFileName(text);
    };


    const handleFileNameBlur = () => {
        const valueToSave =
            fileName.trim() === ""
                ? "DATA_MOCKER"
                : fileName.trim();

        fileStore.updateFileName(valueToSave);
    };


    const handleFormatChange = (
        callback: (value: string) => string
    ) => {
        const newValue = callback(valueFormat);

        setValueFormat(newValue);
        fileStore.updateFormat(newValue);
    };

    useEffect(() => {
        setLocalRows(fileStore.rows);
        setFileName(fileStore.file_name);
        setValueFormat(fileStore.format.toLowerCase());
    }, [
        fileStore.rows,
        fileStore.format,
        fileStore.file_name,
    ]);

    const isDark = themeMode === "dark";

    return (
        <Container>

            <View className="flex-1 bg-white dark:bg-black">

                <View className="flex-1 px-5 py-6">

                    <Text className="mb-4 text-xl font-bold text-black dark:text-white">
                        {t("platform")}
                    </Text>

                    <Text className="mb-2 text-base font-semibold text-black dark:text-white">
                        {t("theme")}
                    </Text>

                    <DropDownPicker
                        open={openTheme}
                        value={themeMode}
                        items={itemsTheme}
                        setOpen={setOpenTheme}
                        setValue={handleThemeChange}
                        ArrowDownIconComponent={() => (
                            <Ionicons
                                name="chevron-down"
                                size={20}
                                color={isDark ? "#FFFFFF" : "#000000"}
                            />
                        )}

                        ArrowUpIconComponent={() => (
                            <Ionicons
                                name="chevron-up"
                                size={20}
                                color={isDark ? "#FFFFFF" : "#000000"}
                            />
                        )}

                        style={{
                            borderColor: isDark ? "#374151" : "#D1D5DB",
                            backgroundColor: isDark ? "#111827" : "#FFFFFF",
                        }}

                        textStyle={{
                            color: isDark ? "#FFFFFF" : "#000000",
                        }}

                        dropDownContainerStyle={{
                            borderColor: isDark ? "#374151" : "#D1D5DB",
                            backgroundColor: isDark ? "#111827" : "#FFFFFF",
                        }}

                        listItemLabelStyle={{
                            color: isDark ? "#FFFFFF" : "#000000",
                        }}
                    />
                    <Text className="mb-2 mt-8 text-base font-semibold text-black dark:text-white">
                        {t("language")}
                    </Text>

                    <DropDownPicker
                        open={openLanguage}
                        value={language}
                        items={itemsLanguage}
                        setOpen={setOpenLanguage}
                        setValue={handleLanguageChange}
                        placeholder={t("language")}
                        zIndex={2000}
                        zIndexInverse={2000}
                        style={{
                            borderColor: isDark
                                ? "#374151"
                                : "#D1D5DB",
                            backgroundColor: isDark
                                ? "#111827"
                                : "#FFFFFF",
                        }}

                        textStyle={{
                            color: isDark
                                ? "#FFFFFF"
                                : "#000000",
                        }}

                        dropDownContainerStyle={{
                            borderColor: isDark
                                ? "#374151"
                                : "#D1D5DB",
                            backgroundColor: isDark
                                ? "#111827"
                                : "#FFFFFF",
                        }}

                        listItemLabelStyle={{
                            color: isDark
                                ? "#FFFFFF"
                                : "#000000",
                        }}

                        selectedItemLabelStyle={{
                            fontWeight: "600",
                        }}
                    />

                    <Text className="mb-4 mt-8 text-xl font-bold text-black dark:text-white">
                        {t("file")}
                    </Text>

                    <Text className="mb-2 text-base font-semibold text-black dark:text-white">
                        {t("fileName")}
                    </Text>

                    <TextInput
                        value={fileName}
                        onChangeText={handleFileNameChange}
                        onBlur={handleFileNameBlur}
                        placeholder={t("fileName")}
                        placeholderTextColor={
                            isDark
                                ? "#9CA3AF"
                                : "#6B7280"
                        }
                        autoCapitalize="none"
                        maxLength={30}
                        className="
                            mb-6
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            px-4
                            py-3
                            text-black
                            dark:border-gray-700
                            dark:bg-gray-900
                            dark:text-white
                        "
                    />

                    <Text
                        className="
                            mb-2
                            text-base
                            font-semibold
                            text-black
                            dark:text-white
                        "
                    >
                        {t("defaultRows")}
                    </Text>

                    <TextInput
                        value={localRows}
                        onChangeText={handleRowsChange}
                        onBlur={handleRowsBlur}
                        placeholder={t("defaultRows")}
                        placeholderTextColor={
                            isDark
                                ? "#9CA3AF"
                                : "#6B7280"
                        }
                        keyboardType={
                            "numeric" as KeyboardTypeOptions
                        }
                        maxLength={8}
                        className="
                            mb-6
                            rounded-lg
                            border
                            border-gray-300
                            bg-white
                            px-4
                            py-3
                            text-black
                            dark:border-gray-700
                            dark:bg-gray-900
                            dark:text-white
                        "
                    />

                    <Text
                        className="
                            mb-2
                            text-base
                            font-semibold
                            text-black
                            dark:text-white
                        "
                    >
                        {t("defaultFormat")}
                    </Text>

                    <DropDownPicker
                        open={openFormat}
                        value={valueFormat}
                        items={itemsFormat}
                        setOpen={setOpenFormat}
                        setValue={handleFormatChange}
                        setItems={setItemsFormat}
                        placeholder={t("defaultFormat")}
                        zIndex={1000}
                        zIndexInverse={3000}

                        style={{
                            borderColor: isDark
                                ? "#374151"
                                : "#D1D5DB",
                            backgroundColor: isDark
                                ? "#111827"
                                : "#FFFFFF",
                        }}

                        textStyle={{
                            color: isDark
                                ? "#FFFFFF"
                                : "#000000",
                        }}

                        dropDownContainerStyle={{
                            borderColor: isDark
                                ? "#374151"
                                : "#D1D5DB",
                            backgroundColor: isDark
                                ? "#111827"
                                : "#FFFFFF",
                        }}

                        listItemLabelStyle={{
                            color: isDark
                                ? "#FFFFFF"
                                : "#000000",
                        }}

                        selectedItemLabelStyle={{
                            fontWeight: "600",
                        }}
                    />

                </View>

            </View>

        </Container>
    );
});

export default Config;