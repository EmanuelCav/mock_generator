export interface IColumn {
    fieldName: string;
    topic: string;
    blank: number;
    id: number;
    data: (min: number, max: number) => any;
    min?: number;
    max?: number;
}

export interface ISelectColumn {
    type: string;
    topic: string[];
    name: string;
}

export interface ICreateColumn {
    title: string;
    columnData: string;
    data: (min: number, max: number) => any;
}

export interface ITemplate {
    data: IColumn[];
    title: string;
}