import React, { useState } from "react";
import { FlatList, ImageBackground, View } from "react-native";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { styles } from "../constants/Styles";
import { useFormInput } from "../constants/Hooks";
import { Items } from "../constants/Items";
import Item from "../components/Item";
import Tabs from "../components/Tabs";
import Feild from "../components/Feild";

export default function Search() {
    const [state, setState] = useState<any[]>([]);
    const [one, setOne] = useState("#19d5ff");
    const [two, setTwo] = useState("#00f150");
    const search = useFormInput("");

    function fetchSearchResults() {
        const res: any = Items.filter((val: any) => {
            return val.word === search.defaultValue;
        });

        setState(res);
        search.setText("");
    };

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.page}>
            <Navbar />

            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Feild
                    placeholder="Search..."
                    value={search.defaultValue}
                    onChange={search.onChangeText}
                />
                <Button
                    color="#19d5ff"
                    onClick={fetchSearchResults}
                    options={{ br: 5, width: 35, height: 35, marginRight: 15 }}>
                    🔍
                </Button>
            </View>

            <FlatList
                data={state}
                keyExtractor={(item: any) => item.key}
                renderItem={({ item }) => <Item name={item.name} price={item.price}>
                    <View style={{ display: "flex", flex: 1, flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
                        <Button color={one} onClick={item.onSelect} options={{ width: 30, height: 30, br: 6 }}>+</Button>
                        <Button color={two} onClick={item.onDelete} options={{ width: 30, height: 30, br: 6 }}>-</Button>
                    </View>
                </Item>}
            />

            <Tabs />
        </ImageBackground>
    )
};