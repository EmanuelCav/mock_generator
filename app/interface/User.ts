import { IColumn } from "./Column";

export interface IUserStore {
    history: IHistory[];
    isDarkMode: boolean;
    isThemeChanged: boolean;
}

export interface IHistory {
    name: string;
    id: number;
    date: string;
    columns: IColumn[];
    data: any[];
}