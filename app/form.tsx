import React from "react";
import { ScrollView, View } from "react-native";
import Form from "../components/Form";
import { styles } from "../utils/Styles";

export default function FormPage() {
    return (
        <View style={styles.page}>
            <ScrollView>
                <Form />
            </ScrollView>
        </View>
    )
}