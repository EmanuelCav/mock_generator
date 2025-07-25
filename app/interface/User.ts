import { IColumn } from "./Column";

export interface IUserStore {
    history: IHistory[];
    historyData: IHistory | null;
    isDarkMode: boolean;
    lang: string;
}

export interface IHistory {
    name: string;
    id: number;
    date: string;
    columns: IColumn[];
    data: any[];
}