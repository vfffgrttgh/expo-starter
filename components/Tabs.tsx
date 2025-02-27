import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Tabs() {
    return (
        <>
            <View style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", gap: 30, backgroundColor:"green" }}>
                <Link href="/" style={{ fontSize: 35 }}>🏠</Link>
                <Link href="/cart" style={{ fontSize: 35 }}>🛒</Link>
                <Link href="/search" style={{ fontSize: 35 }}>🔍</Link>
                <Link href="/pay" style={{ fontSize: 35 }}>💵</Link>
            </View>
        </>
    )
}