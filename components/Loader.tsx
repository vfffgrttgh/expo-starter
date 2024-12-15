import React from "react";
import WebView from "react-native-webview";
import { constants } from "../constants/Constants";

export default function Loader() {
    return (
        <>
            <WebView
                source={{ html: constants.loader }}
                style={{ width: 350, height: 2650, margin: 20, padding: 20, }}
            />
        </>
    )
}