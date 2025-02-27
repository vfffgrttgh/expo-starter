import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Item from "./Item";
import Button from "./Button";
import { Items as data } from "../constants/Items";
import { MappedItem } from "../constants/Types";
import { useColorScheme } from "../constants/Hooks";

export default function Grid() {
    let [items, setItems] = useState<any[]>([]); // DECLARE ITEMS
    let [one, setOne] = useState<any>("");
    let [two, setTwo] = useState<any>("");

    useEffect(() => {
        setItems(data);
        const colors: Array<any> | undefined = useColorScheme("blue", "green");

        colors?.reduce((prev, cur) => {
            setOne(prev);
            setTwo(cur);
        });
    }, []); // SET ITEMS WITH NAMES AND PRICES

    return (
        <>
            <ScrollView>
                <View style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
                    {items.map((item: MappedItem) => (
                        <View key={item.key} style={{ margin: 10 }}>
                            <Item name={item.name} price={item.price} key={item.key}>
                                <View style={{ display:"flex", flex: 1, flexDirection: "row", gap: 10, justifyContent:"center", alignItems:"center" }}>
                                    <Button color={one} onClick={item.onSelect} options={{ width: 30, height: 30, br: 6 }}>+</Button>
                                    <Button color={two} onClick={item.onDelete} options={{ width: 30, height: 30, br: 6 }}>-</Button>
                                </View>
                            </Item>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </>
    )
}