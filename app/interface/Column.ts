export interface IColumn {
    fieldName: string;
    topic: string;
    blank: number;
    id: number;
    data: (min: number, max: number, array: string[]) => any;
    min?: number;
    max?: number;
    array?: string[];
}

export interface IParameters {
    min: number;
    max?: number;
}

export interface ISelectColumn {
    type: string[];
    topic: string[];
    name: string;
}

export interface ICreateColumn {
    title: string;
    columnData: string;
    data: (min: number, max: number, array: string[]) => any;
}

export interface ITemplate {
    data: IColumn[];
    title: string;
}

export interface ITopic {
    label: string;
    value: string;
    iconName: string;
}