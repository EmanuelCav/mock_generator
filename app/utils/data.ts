import { faker } from "./fakerGenerator"
import i18n from "../../i18n";

import { IColumn } from "../interface/Column";
import { FormatOption, LanguageOption } from "../types/general.types";

export const defaultColumn = (): IColumn[] => [
    {
        id: 1,
        fieldName: "Id",
        topic: "UUID",
        blank: 0,
        data: () => faker.string.uuid()
    },
    {
        id: 2,
        fieldName: i18n.t("firstnameField"),
        topic: "First name",
        blank: 0,
        data: () => faker.person.firstName()
    },
    {
        id: 3,
        fieldName: i18n.t("lastnameField"),
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
