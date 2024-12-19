import React, { useEffect, useState } from "react";
import { View, TextInput, Button, ScrollView, Text } from "react-native";
import { styles } from "../utils/Styles";
import { GET, POST } from "../utils/Fetching";

export default function Form() {
    const [id, setID] = useState<string>("id");
    const [value, setValue] = useState<string>("value");
    const [amount, set] = useState<{ id: string; value: string;}[]>([]);

    async function handleSubmit() {
        await POST({ id: id, value: value, type: "XML" });

        const fetchData: any = await GET("XML");

        set([...fetchData]);
    };
    
    return (
        <>
            <View style={{ backgroundColor: "teal" }}>
                <TextInput defaultValue={id} onChangeText={text => setID(text)} style={styles.input} />
                <TextInput defaultValue={value} onChangeText={text => setValue(text)} style={styles.input} />
                <Button title="SUBMIT" onPress={handleSubmit} />
            </View>
            <ScrollView style={{ width: '100%', height: '50%' }}>
                { amount.map((item) => (
                    <Text style={styles.text} key={item.id}>{item.id}: {item.value}</Text>
                )) }
            </ScrollView>
        </>
    )
}