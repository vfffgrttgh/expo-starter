import AsyncStorage from "@react-native-async-storage/async-storage";

// CACHING

export async function AddItem(key: string, value: any): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
};

export async function GetItem(key: string): Promise<void> {
    await AsyncStorage.getItem(key);
};

export async function DeleteItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
};