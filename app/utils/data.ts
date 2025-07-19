import { faker } from "./generator";

import { IColumn } from "../interface/Column";
import { FormatOption, LanguageOption } from "../types/general.types";

export const defaultColumn: IColumn[] = [{
    id: 1,
    fieldName: "Id",
    topic: "UUID",
    blank: 0,
    data: () => faker.string.uuid()
}, {
    id: 2,
    fieldName: "first name",
    topic: "First name",
    blank: 0,
    data: () => faker.person.firstName()
}, {
    id: 3,
    fieldName: "last name",
    topic: "Last name",
    blank: 0,
    data: () => faker.person.lastName()
}]

export const formatsAvailable: FormatOption[] = [
    { label: 'CSV', value: 'csv' },
    { label: 'Excel', value: 'excel' },
    { label: 'JSON', value: 'json' },
];

export const languagesAvailable: LanguageOption[] = [
    { label: 'English', value: 'english' },
    { label: 'Spanish', value: 'spanish' }
]