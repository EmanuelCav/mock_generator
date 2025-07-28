import { IColumn } from "./Column";

export interface IFileStore {
    column: IColumn[];
    field: IColumn | null;
    rows: string;
    areHeaders: boolean;
    format: string;
}

export interface FormatKeyProps {
    csv: string;
    excel: string;
    json: string;
    sql: string;
    xml: string;
}

export interface LanguageKeyProps {
    es: string;
    en: string;
}

export interface FileOptions {
    rows: string;
    areHeaders: boolean;
    format: string;
}