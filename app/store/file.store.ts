import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY_FILE } from "../constants/user.const";

import { IColumn } from "../interface/Column";
import { IFileStore } from "../interface/File";

import { defaultColumn } from "../utils/data";

class FileStore {

    column: IColumn[] = defaultColumn
    field: IColumn | null = null
    rows: string = '1000'
    areHeaders: boolean = true
    format: string = "CSV"

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

    removeColumn(col: IColumn) {
        this.column.filter(c => c.id !== col.id);
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

    async saveToStorage() {
        const data: IFileStore = {
            column: this.column,
            field: this.field,
            areHeaders: this.areHeaders,
            format: this.format,
            rows: this.rows
        };
        await AsyncStorage.setItem(STORAGE_KEY_FILE, JSON.stringify(data));
    }

    async loadFromStorage() {
        const json = await AsyncStorage.getItem(STORAGE_KEY_FILE);
        if (json) {
            const data: IFileStore = JSON.parse(json);
            runInAction(() => {
                this.column = defaultColumn
                this.field = null
                this.areHeaders = data.areHeaders
                this.rows = data.rows
                this.format = data.format
            });
        }
    }

}

export const fileStore = new FileStore();


