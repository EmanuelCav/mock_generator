import { Colors } from "@rneui/base";

import { IColumn, ICreateColumn, ISelectColumn } from "../interface/Column"
import { FileOptions } from "../interface/File";

export type ColumnPropsType = {
    column: IColumn;
    removeColumn: (data: IColumn) => void;
    openEdit: (data: IColumn) => void;
    colors: Colors;
    id: number;
}

export type MediaPropsType = {
    openForm: () => void;
    openOptions: () => void;
}

export type AddColumnPropsType = {
    openForm: () => void;
}

export type FormColumnPropsType = {
    handleClose: () => void;
    handleAddColumn: (data: ICreateColumn) => void;
    colors: Colors;
    error: string;
    columnLength: number
}

export type ColumnSelectPropsType = {
    element: ISelectColumn;
    setColumnData: (columnData: string) => void;
    columnData: string;
    colors: Colors;
}

export type FormEditPropsType = {
    colors: Colors;
    handleClose: () => void;
    field: IColumn;
    handleEdit: (field: IColumn) => void;
}

export type ButtonGeneratorPropsType = {
    columnsLength: number;
    handleGenerate: () => void;
    loading: boolean;
}

export type OptionsPropsType = {
    handleClose: () => void;
    handleOption: (col: FileOptions) => void;
}