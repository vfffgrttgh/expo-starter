import React from "react";
import { View } from "react-native";
import MapPage from "../components/MapView";
import { styles } from "../utils/Styles";

export default function Maps() {
    return (
        <View style={styles.page}>
            <MapPage />
        </View>
    )
}