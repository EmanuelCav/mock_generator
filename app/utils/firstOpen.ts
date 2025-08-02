import AsyncStorage from '@react-native-async-storage/async-storage';

import { STORAGE_OPEN_FIRST } from '../constants/user.const';

export const isFirstOpen = async (): Promise<boolean> => {
  const value = await AsyncStorage.getItem(STORAGE_OPEN_FIRST);
  return value === null;
};

export const setFirstOpenFlag = async () => {
  await AsyncStorage.setItem(STORAGE_OPEN_FIRST, 'false');
};
