import { Link } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import WebView from "react-native-webview";

export default function Game(props: { uri: string }) {
    return (
        <>
            <View style={{ backgroundColor: "#00e495", padding: 5, margin: 10, borderRadius: 7 }}>
                {Platform.OS === "web" ? 
                <iframe src={props.uri} width="300" height="300" style={{ border: "none", borderRadius: 7 }}></iframe> : 
                <WebView source={{ uri: props.uri }} style={{ width: 300, height: 200 }} />
                }
                <Link href={props.uri} style={{ color: "white", alignSelf:"center", textAlign:"center", backgroundColor:"green", borderRadius: 5, width: 50, height: 25, margin: 5 }}>Play</Link>
            </View>
        </>
    );
}