import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import Navbar from "../components/Navbar";
import { styles } from "../constants/Styles";
import Item from "../components/Item";
import Applify from "../constants/Applify";
import { StatusBar } from "expo-status-bar";
import Tabs from "../components/Tabs";
import { Link } from "expo-router";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Checkout() {
    let [data, setData] = useState<any[]>([]); // STATE

    useEffect(() => {
        async function fetchCache() {
            let cache: any = await Applify.cache("GET_ALL");

            return cache;
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
                        data={data}
                        keyExtractor={(item) => item.key}
                        renderItem={({item}) => (
                            <Item name={item.key} price={item.value} />
                        )}
                    />
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
