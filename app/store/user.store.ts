import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from 'expo-localization';

import { STORAGE_KEY_USER } from "../constants/user.const";

import { IHistory, IUserStore } from "../interface/User";

const languageCode = Localization.getLocales()[0].languageCode || 'en'

class UserStore {

    history: IHistory[] = [];
    historyData: IHistory | null = null
    isDarkMode: boolean = false
    lang: string = languageCode

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

    updateMode = (data: boolean) => {
        this.isDarkMode = data
        this.saveToStorage();
    }

    updateLang = (data: string) => {
        this.lang = data
        this.saveToStorage();
    }

    async saveToStorage() {
        const data: IUserStore = {
            history: this.history,
            historyData: this.historyData,
            isDarkMode: this.isDarkMode,
            lang: this.lang
        }
        await AsyncStorage.setItem(STORAGE_KEY_USER, JSON.stringify(data));
    }

    async loadFromStorage() {
        const json = await AsyncStorage.getItem(STORAGE_KEY_USER);
        if (json) {
            const data: IUserStore = JSON.parse(json);
            runInAction(() => {
                this.history = data.history ?? [];
                this.historyData = null;
                this.isDarkMode = data.isDarkMode ?? false;
                this.lang = data.lang ?? languageCode
            });
        }
    }

}

export const userStore = new UserStore();


