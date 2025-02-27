import AsyncStorage from "@react-native-async-storage/async-storage";

class Structure {
    async cache(type: string, key?: any, value?: any) {
        if (type === "GET") {
            const item: any = await AsyncStorage.getItem(key);

            return JSON.parse(item);
        } else if (type === "GET_ALL") {
            const keys = await AsyncStorage.getAllKeys();
            const items = await AsyncStorage.multiGet(keys);

            const formattedData = items.map(([key, value]) => ({
                key: key ? JSON.parse(key) : key,
                value: value ? JSON.parse(value) : value, // Parse JSON if applicable
            }));

            return formattedData;
        } else if(type === "ADD") {
            await AsyncStorage.setItem(JSON.stringify(key), JSON.stringify(value));
        } else if(type === "DELETE") {
            await AsyncStorage.removeItem(JSON.stringify(key));
        };
    };
};

const Applify: Structure = new Structure();

export default Applify;