import { Colors } from "@rneui/base";

import { IColumn, ICreateColumn, ISelectColumn } from "../interface/Column"
import { FileOptions } from "../interface/File";

export type ColumnPropsType = {
    column: IColumn;
    removeColumn: (data: IColumn) => void;
    openEdit: (data: IColumn) => void;
    colors: Colors;
    onLongPress: () => void;
    isActive: boolean;
}

export type MediaPropsType = {
    openForm: () => void;
    openOptions: () => void;
    openPreview: () => void;
    isRefreshData: boolean;
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
    handleRefreshData: () => void;
    isRefreshData: boolean;
}

export type OptionsPropsType = {
    handleClose: () => void;
    handleOption: (col: FileOptions) => void;
}

export type TypeInputPropsType = {
    value: string;
    setValue: (value: string) => void;
    colors: Colors;
    label: string;
    topic: string;
}

export type DateInputPropsType = {
    value: string;
    setValue: (value: string) => void;
    colors: Colors;
    label: string;
    labelSelected: string;
    topic: string;
}

export type PreviewPropsType = {
    colors: Colors;
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
    colors: Colors;
}

export type PreviewSQLPropsType = {
    data: any[];
    colors: Colors;
    table_name_sql: string;
}

export type PreviewXMLPropsType = {
    data: any[];
    colors: Colors;
    record_element_xml: string; 
    root_element_xml: string;
}

export type PreviewJSONPropsType = {
    data: any[];
    colors: Colors;
    json_array: boolean;
}

export type PreviewCSVPropsType = {
    data: any[];
    colors: Colors;
    header_csv: boolean;
}