import { IColumn } from "./Column";

export interface IFileStore {
    column: IColumn[];
    field: IColumn | null;
    rows: string;
    format: string;
    header_csv: boolean;
    json_array: boolean;
    root_element_xml: string;
    record_element_xml: string;
    table_name_sql: string;
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
    format: string;
    header_csv: boolean;
    json_array: boolean;
    root_element_xml: string;
    record_element_xml: string;
    table_name_sql: string;
}