import { faker } from "./fakerGenerator"

import { IColumn } from "../interface/Column";
import { FormatOption } from "../types/general.types";

export const defaultColumn = (): IColumn[] => [
    {
        id: generateRandomNumber(),
        fieldName: "row number",
        topic: "Row number",
        blank: 0,
        data: () => null
    },
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
    },
    {
        id: generateRandomNumber(),
        fieldName: "email",
        topic: "Email",
        blank: 0,
        data: () => faker.internet.email()
    },
    {
        id: generateRandomNumber(),
        fieldName: "birthdate",
        topic: "Birthdate",
        blank: 0,
        data: (min: number = 1940, max: number = 2007) => faker.date.between({ from: `${min}-01-01T00:00:00.000Z`, to: `${max}-01-01T00:00:00.000Z` }).toISOString().split("T")[0]
    },
    {
        id: generateRandomNumber(),
        fieldName: "gender",
        topic: "Gender",
        blank: 0,
        data: () => faker.person.sex()
    }
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
