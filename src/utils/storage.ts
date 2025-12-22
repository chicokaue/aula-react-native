import AsyncStorage from '@react-native-async-storage/async-storage';

interface IStorageData {
  key: string;
  value: string;
}

export const storeData = async ({ value, key }: IStorageData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('Error ao salvar dadoo', e);
  }
};

export const getData = async (key : string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
