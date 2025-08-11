import { IColumn } from "./Column";

export interface IUserStore {
    history: IHistory[];
    historyData: IHistory | null;
    isDarkMode: boolean;
    lang: string;
}

export interface IHistory {
    name: string;
    id: string;
    date: string;
    columns: IColumn[];
    extension: string;
    data: any[];
    header_csv: boolean;
    json_array: boolean;
    root_element_xml: string;
    record_element_xml: string;
    table_name_sql: string;
}
