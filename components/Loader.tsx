import React from "react";
import { Text } from "react-native";
import { styles } from "../utils/Styles";

export default function Loader() {
    return (
        <>
            <Text style={styles.header}>Loading...</Text>
        </>
    )
}