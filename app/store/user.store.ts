import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY_USER } from "../constants/user.const";

import { IHistory, IUserStore } from "../interface/User";

import { column } from "../utils/topics";

class UserStore {

    history: IHistory[] = [];
    historyData: IHistory | null = null

    constructor() {
        makeAutoObservable(this);
        this.loadFromStorage();
    }

    addHistory(col: IHistory) {
        this.history.push(col);
        this.saveToStorage();
    }

    getHistory(his: IHistory) {
        this.historyData = his
        this.saveToStorage();
    }

    removeHistory = (his: IHistory) => {
        this.history = this.history.filter(c => c.id !== his.id)
        this.saveToStorage();
    }

    async saveToStorage() {
        const data: IUserStore = {
            history: this.history,
            historyData: this.historyData
        }
        await AsyncStorage.setItem(STORAGE_KEY_USER, JSON.stringify(data));
    }

    async loadFromStorage() {
        const json = await AsyncStorage.getItem(STORAGE_KEY_USER);
        if (json) {
            const data: IUserStore = JSON.parse(json);
            runInAction(() => {
                this.history = data.history.map((h) => ({
                    ...h,
                    columns: h.columns.map(col => ({
                        ...col,
                        data: column.find(c => c.name === col.topic)?.data!
                    }))
                })) ?? []
                this.historyData = null;
            });
        }
    }

}

export const userStore = new UserStore();


