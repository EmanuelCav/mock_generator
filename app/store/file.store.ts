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
    areHeaders: boolean = true
    format: string = "CSV"
    fieldId: number = defaultColumn.length

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
        this.fieldId = this.fieldId + 1
        this.saveToStorage();
    }

    updateOptions(col: FileOptions) {
        this.areHeaders = col.areHeaders
        this.format = col.format
        this.rows = col.rows
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

    updateHeaders(data: boolean) {
        this.areHeaders = data
        this.saveToStorage();
    }

    getColumns(columns: IColumn[]) {
        this.column = columns
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
            areHeaders: this.areHeaders,
            format: this.format,
            rows: this.rows,
            fieldId: this.fieldId
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
                this.areHeaders = data.areHeaders ?? true
                this.rows = data.rows ?? '1000'
                this.format = data.format ?? 'CSV',
                this.fieldId = defaultColumn.length
            });
        }
    }

}

export const fileStore = new FileStore();


