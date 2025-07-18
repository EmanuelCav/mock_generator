export interface IColumn {
    fieldName: string;
    topic: string;
    blank: number;
    id: number;
    data: () => any;
}

export interface ISelectColumn {
    type: string;
    topic: string[];
    name: string;
}

export interface ICreateColumn {
    title: string;
    columnData: string;
    data: () => any;
}