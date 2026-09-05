import { IColumn, ICreateColumn, ISelectColumn } from "../interface/Column"
import { FileOptions } from "../interface/File";

export type ColumnPropsType = {
    column: IColumn;
    removeColumn: (data: IColumn) => void;
    openEdit: (data: IColumn) => void;
    onLongPress: () => void;
    isActive: boolean;
}

export type MediaPropsType = {
    openForm: () => void;
    openOptions: () => void;
    openPreview: () => void;
    isRefreshData: boolean;
    t: (scope: string, options?: object | undefined) => string;
}

export type AddColumnPropsType = {
    openForm: () => void;
    t: (scope: string, options?: object | undefined) => string;
}

export type FormColumnPropsType = {
    handleClose: () => void;
    handleAddColumn: (data: ICreateColumn) => void;
    error: string;
    t: (scope: string, options?: object | undefined) => string;
}

export type ColumnSelectPropsType = {
    element: ISelectColumn;
    setColumnData: (columnData: string) => void;
    columnData: string;
}

export type FormEditPropsType = {
    handleClose: () => void;
    field: IColumn;
    handleEdit: (field: IColumn) => void;
    t: (scope: string, options?: object | undefined) => string;
}

export type ButtonGeneratorPropsType = {
    columnsLength: number;
    handleGenerate: () => void;
    loading: boolean;
    handleRefreshData: () => void;
    isRefreshData: boolean;
    t: (scope: string, options?: object | undefined) => string;
}

export type OptionsPropsType = {
    handleClose: () => void;
    handleOption: (col: FileOptions) => void;
    t: (scope: string, options?: object | undefined) => string;
}

export type TypeInputPropsType = {
    value: string;
    setValue: (value: string) => void;
    label: string;
    topic: string;
}

export type DateInputPropsType = {
    value: string;
    setValue: (value: string) => void;
    label: string;
    labelSelected: string;
    topic: string;
}

export type PreviewPropsType = {
    data: any[];
    setIsPreview: (isPreview: boolean) => void;
    format: string;
    header_csv: boolean;
    json_array: boolean;
    root_element_xml: string;
    record_element_xml: string;
    table_name_sql: string;
}

export type PreviewXLSXPropsType = {
    data: any[];
}

export type PreviewSQLPropsType = {
    data: any[];
    table_name_sql: string;
}

export type PreviewXMLPropsType = {
    data: any[];
    record_element_xml: string;
    root_element_xml: string;
}

export type PreviewJSONPropsType = {
    data: any[];
    json_array: boolean;
}

export type PreviewCSVPropsType = {
    data: any[];
    header_csv: boolean;
}