import { faker } from "./fakerGenerator"
import i18n from "../../i18n";

import { IColumn } from "../interface/Column";
import { FormatOption, LanguageOption } from "../types/general.types";

export const defaultColumn = (): IColumn[] => [
    {
        id: generateRandomNumber(),
        fieldName: "id",
        topic: "UUID",
        blank: 0,
        data: () => faker.string.uuid()
    },
    {
        id: generateRandomNumber(),
        fieldName: "first name",
        topic: "First name",
        blank: 0,
        data: () => faker.person.firstName()
    },
    {
        id: generateRandomNumber(),
        fieldName: "last name",
        topic: "Last name",
        blank: 0,
        data: () => faker.person.lastName()
    }
];

export const formatsAvailable: FormatOption[] = [
    { label: 'CSV', value: 'csv' },
    { label: 'EXCEL', value: 'excel' },
    { label: 'JSON', value: 'json' },
    { label: 'SQL', value: 'sql' },
    { label: 'XML', value: 'xml' },
];

export const extensionFile = (file: string): string => {
    switch (file) {
        case "csv":
            return "csv"
        case "json":
            return "json"
        case "sql":
            return "sql"
        case "xml":
            return "xml"
        case "excel":
            return "xlsx"
        default:
            return "xlsx"
    }
}

export const languagesAvailable: LanguageOption[] = [
    { label: i18n.t("english"), value: 'en' },
    { label: i18n.t("spanish"), value: 'es' }
];

export const generateRandomString = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
};

export const generateRandomNumber = () => {
  return Math.floor(100000 + Math.random() * 900000)
}
