import React from "react";
import { Platform, Text } from "react-native";
import { styles } from "../constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
import { router } from "expo-router";

export default function Navbar() {
    return (
        <>
            <SafeAreaView style={styles.navbar}>
                { Platform.OS === "android" || "ios" ? 
                    <Text style={[styles.profile, { marginRight: 20, marginLeft: 10 }]}>🍕 | Fiffy</Text> 
                    : <Text style={[styles.profile, { marginRight: 20, marginLeft: 10, fontSize: 50 }]}>🍕 | Fiffy</Text> 
                }

                {Platform.OS === "android" ? <Button color="teal" onClick={() => {
                    router.push("/games")
                }} options={{ marginBottom: 45, marginLeft: 30, width: 100, height: 50, marginTop: 20, br: 10, alignSelf:"flex-end" }}>
                    GAMES
                </Button>: <Button color="teal" onClick={() => {
                    router.push("/games")
                }} options={{ marginBottom: 25, marginLeft: 30, width: 100, height: 50, marginTop: 20, br: 10, alignSelf:"flex-end" }}>
                    GAMES
                </Button> }

                { Platform.OS === "ios" && <Button color="teal" onClick={() => {
                    router.push("/games")
                }} options={{ marginBottom: 45, marginLeft: 30, width: 100, height: 30, marginTop: 20, br: 10, alignSelf:"flex-end" }}>
                    GAMES
                </Button> }
            </SafeAreaView>
        </>
    )
};