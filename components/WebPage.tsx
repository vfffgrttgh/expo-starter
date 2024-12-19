import React from "react";
import { Suspense } from "react";
import { ScrollView } from "react-native";
import WebView from "react-native-webview";
import Loader from "./Loader";

export default function Aoblox() {
    return (
        <Suspense fallback={<Loader />}>
            <ScrollView>
                <WebView
                    source={{ uri: "https://aoby-jalalabad.netlify.app" }}
                    style={{ width: 350, height: 2600, margin: 20 }}
                />
            </ScrollView>
        </Suspense>
    );
}