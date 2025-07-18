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
}

export interface LanguageKeyProps {
    spanish: string;
    english: string;
}