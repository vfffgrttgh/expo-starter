import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import Navbar from "../components/Navbar";
import { styles } from "../constants/Styles";
import { StatusBar } from "expo-status-bar";
import Tabs from "../components/Tabs";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../components/Button";
import Applify from "../constants/Applify";

export default function Payment() {
    let [data, setData] = useState<any[]>([]); // STATE
    let [total, setSum] = useState<number>(0);

    useEffect(() => {
        async function fetchCache() {
            const formattedData = await Applify.cache("GET_ALL");
            const computedTotal: number = formattedData.reduce((sum: any, item: { value: any; }) => {
                return sum + item.value;
            }, 0);

            setSum(computedTotal);

            return formattedData;
        }

        fetchCache().then(res => setData(res));
    }, []);

    function Comp() {
        if (data.length > 0) {
            return (
                <>
                    <Text style={styles.header}>You have added these items:</Text>
                    <Button 
                        color="#d1d2d1" 
                        options={{ width: 130, height: 30, alignSelf:"center", br: 5 }}
                        onClick={() => { AsyncStorage.clear(); setData([]) }}
                    >
                        CLEAR ALL
                    </Button>
                    <FlatList
                        style={{ backgroundColor: "#00fe72", padding: 10, margin: 30, borderRadius: 20 }}
                        data={data}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <Text style={styles.header}>{item.key}: {item.value}</Text>
                        )}
                    />
                    <Text style={[styles.header, { color: "black" }]}>₹{total }</Text>
                    <Tabs />
                </>
            )
        } else {
            return (
                <>
                    <Text style={styles.header}>SHOP NOW</Text>
                    <Link href="/" style={{ fontSize: 50, textAlign: "center", fontWeight: 700 }}>GO BACK</Link>
                </>
            )
        }
    }; // CONDITIONALLY RENDER ITEMS

    return ( // THE PAGE
        <>
            <ImageBackground source={require("../assets/background.png")} style={styles.page}>
                <Navbar />

                <Comp />
            </ImageBackground>
            <StatusBar style="light" />
        </>
    );
}
