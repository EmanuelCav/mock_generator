import { useEffect, useMemo, useState } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { observer } from "mobx-react-lite";

import Container from "../components/ContainerGeneral";
import CustomDropdown from "../components/CustomDropdown";

import { FormatOption, LanguageOption } from "../types/general.types";

import { fileStore } from "../store/file.store";

import { useLanguage } from "../hooks/useLanguageContext";
import { ThemeMode, useThemeMode } from "../hooks/useThemeContext";

const formatsAvailable: FormatOption[] = [
    { label: 'CSV', value: 'csv' },
    { label: 'EXCEL', value: 'excel' },
    { label: 'JSON', value: 'json' },
    { label: 'SQL', value: 'sql' },
    { label: 'XML', value: 'xml' }
]

const Config = observer(() => {

    const { t, changeLanguage, language } = useLanguage();
    const { themeMode, setThemeMode } = useThemeMode();

    const itemsLanguage = useMemo<LanguageOption[]>(() => [
        {
            label: t("english"),
            value: "en",
        },
        {
            label: t("french"),
            value: "fr",
        },
        {
            label: t("german"),
            value: "de",
        },
        {
            label: t("spanish"),
            value: "es",
        },
        {
            label: t("portuguese"),
            value: "pt",
        },
    ], [t]);

    const itemsTheme = useMemo(() => [
        {
            label: t("light"),
            value: "light" as ThemeMode,
        },
        {
            label: t("dark"),
            value: "dark" as ThemeMode,
        },
    ], [t]);

    const [localRows, setLocalRows] = useState<string>(fileStore.rows);
    const [fileName, setFileName] = useState<string>(fileStore.file_name)
    const [valueFormat, setValueFormat] = useState<string>(fileStore.format.toLowerCase())

    const handleRowsChange = (text: string) => {
        setLocalRows(text);
    }

    const handleRowsBlur = () => {
        const valueToSave =
            localRows.trim() === ""
                ? "1000"
                : localRows.trim();

        setLocalRows(valueToSave);
        fileStore.updateRows(valueToSave);
    }

    const handleFileNameChange = (text: string) => {
        setFileName(text);
    }

    const handleFileNameBlur = () => {
        const valueToSave =
            fileName.trim() === ""
                ? "DATA_MOCKER"
                : fileName.trim();

        setFileName(valueToSave);
        fileStore.updateFileName(valueToSave);
    };

    useEffect(() => {
        setLocalRows(fileStore.rows);
    }, [fileStore.rows]);

    useEffect(() => {
        setFileName(fileStore.file_name);
    }, [fileStore.file_name]);

    useEffect(() => {
        setValueFormat(fileStore.format.toLowerCase());
    }, [fileStore.format]);

    const isDark = themeMode === "dark";

    return (
        <Container>

            <View className="flex-1">

                <View className="flex-1 px-5 py-6">

                    <Text className="mb-4 text-xl font-bold text-black dark:text-white">
                        {t("platform")}
                    </Text>

                    <Text className="mb-2 text-base font-semibold text-black dark:text-white">
                        {t("theme")}
                    </Text>

                    <CustomDropdown
                        data={itemsTheme}
                        value={themeMode}
                        onChange={(value) => {
                            setThemeMode(value as ThemeMode);
                        }}
                    />

                    <Text className="mb-2 mt-8 text-base font-semibold text-black dark:text-white">
                        {t("language")}
                    </Text>

                    <CustomDropdown
                        data={itemsLanguage}
                        value={language}
                        onChange={(value) => {
                            changeLanguage(value);
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
                        className="mb-6 rounded-lg border border-gray-300 bg-white px-4 py-3
                            text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />

                    <Text className="mb-2 text-base font-semibold text-black dark:text-white">
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
                        className="mb-6 rounded-lg border border-gray-300 bg-white px-4 py-3
                            text-black dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />

                    <Text className="mb-2 text-base font-semibold text-black dark:text-white">
                        {t("defaultFormat")}
                    </Text>

                    <CustomDropdown
                        data={formatsAvailable}
                        value={valueFormat}
                        onChange={(value) => {
                            setValueFormat(value);
                            fileStore.updateFormat(value);
                        }}
                    />
                </View>
            </View>
        </Container>
    );
});

export default Config;