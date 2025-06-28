import { Colors } from "@rneui/base";
import { IColumn, ICreateColumn, ISelectColumn } from "../interface/Column"

export type ColumnPropsType = {
    column: IColumn
    removeColumn: (data: string) => void;
    colors: Colors;
}

export type MediaPropsType = {
    openForm: () => void;
}

export type AddColumnPropsType = {
    openForm: () => void;
}

export type FormColumnPropsType = {
    handleClose: () => void;
    handleAddColumn: (data: ICreateColumn) => void;
    colors: Colors;
    error: string;
}

export type ColumnSelectPropsType = {
    element: ISelectColumn;
    setColumnData: (columnData: string) => void;
    columnData: string;
    colors: Colors;
}