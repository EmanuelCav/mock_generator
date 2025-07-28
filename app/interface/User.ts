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
}
