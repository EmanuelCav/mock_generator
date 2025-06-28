export interface IColumn {
    fieldName: string;
    topic: string;
    blank: number;
    id: number;
}

export interface ISelectColumn {
    type: string;
    topic: string[];
    name: string;
}

export interface ICreateColumn {
    title: string;
    columnData: string;
}