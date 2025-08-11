import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY_FILE } from "../constants/user.const";

import { IColumn } from "../interface/Column";
import { FileOptions, IFileStore } from "../interface/File";

import { defaultColumn } from "../utils/data";

class FileStore {

    column: IColumn[] = defaultColumn()
    field: IColumn | null = null
    rows: string = '1000'
    format: string = "csv"

    header_csv: boolean = true
    json_array: boolean = true
    root_element_xml: string = "dataset"
    record_element_xml: string = "record"
    table_name_sql: string = "DATA_MOCKER"

    constructor() {
        makeAutoObservable(this);
        this.loadFromStorage();
    }

    getField(field: IColumn | null) {
        this.field = field
        this.saveToStorage();
    }

    addColumn(col: IColumn) {
        this.column.push(col);
        this.saveToStorage();
    }

    updateOptions(col: FileOptions) {
        this.format = col.format
        this.rows = col.rows
        this.saveToStorage();
    }

    updateHeaderCsv(data: boolean) {
        this.header_csv = data
        this.saveToStorage();
    }

    updateArrayJson(data: boolean) {
        this.json_array = data
        this.saveToStorage();
    }

    removeColumn(col: IColumn) {
        this.column = this.column.filter(c => c.id !== col.id);
        this.saveToStorage();
    }

    updateFormat(data: string) {
        this.format = data
        this.saveToStorage();
    }

    updateRows(data: string) {
        this.rows = data
        this.saveToStorage();
    }

    getColumns(columns: IColumn[]) {
        this.column = [...columns]
        this.saveToStorage();
    }

    updateField(col: IColumn) {
        this.column = this.column.map((c) => c.id === col.id ? col : c)
        this.field = null
        this.saveToStorage();
    }

    async saveToStorage() {
        const data: IFileStore = {
            column: this.column,
            field: this.field,
            format: this.format,
            rows: this.rows,
            header_csv: this.header_csv,
            json_array: this.json_array,
            record_element_xml: this.record_element_xml,
            root_element_xml: this.root_element_xml,
            table_name_sql: this.table_name_sql
        };
        await AsyncStorage.setItem(STORAGE_KEY_FILE, JSON.stringify(data));
    }

    async loadFromStorage() {
        const json = await AsyncStorage.getItem(STORAGE_KEY_FILE);
        if (json) {
            const data: IFileStore = JSON.parse(json);
            runInAction(() => {
                this.column = defaultColumn()
                this.field = null
                this.rows = data.rows ?? '1000'
                this.format = data.format ?? 'csv'
                this.header_csv = data.header_csv ?? true
                this.json_array = data.json_array ?? true
                this.root_element_xml = data.root_element_xml ?? "dataset"
                this.record_element_xml = data.record_element_xml ?? "record"
                this.table_name_sql = data.table_name_sql ?? "DATA_MOCKER"
            });
        }
    }

}

export const fileStore = new FileStore();


