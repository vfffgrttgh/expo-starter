import React from "react";
import { Text, View } from "react-native";

export default function Item(props: { name: string; price: number; children?: any; }) {
    return (
        <>
            <View style={{ backgroundColor: "#08cb08", padding: 30, margin: 13, borderRadius: 15 }}>
                <Text style={{ fontSize: 70, textAlign: "center", }}>{props.name}</Text>
                <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>₹{props.price}</Text>

                {props.children}
            </View>
        </>
    )
}