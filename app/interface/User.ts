import { IColumn } from "./Column";

export interface IUserStore {
    history: IHistory[];
    isDarkMode: boolean;
    isThemeChanged: boolean;
}

export interface IHistory {
    name: string;
    id: number;
    date: Date;
    columns: IColumn[];
    data: any[];
}