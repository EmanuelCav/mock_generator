import { IColumn, ISelectColumn } from "../interface/Column"

export type ColumnPropsType = {
    column: IColumn
}

export type MediaPropsType = {
    openForm: () => void;
}

export type AddColumnPropsType = {
    openForm: () => void;
}

export type FormColumnPropsType = {
    handleClose: () => void;
    handleAddColumn: (data: string) => void;
}

export type ColumnSelectPropsType = {
    element: ISelectColumn;
    setColumnData: (columnData: string) => void;
}