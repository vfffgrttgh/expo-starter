import React, { useEffect, useState } from "react";
import { styles } from "../utils/Styles";
import { ScrollView, Text } from "react-native";

export default function FetchComp() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchAPI() {
            const data = await(await fetch("https://jsonplaceholder.typicode.com/todos")).json();

            return data;
        };

        fetchAPI().then(res => setData(res));
    }, []);

    return (
        <ScrollView style={styles.page}>
            { data.map((item: any) => (
                <Text style={styles.text} key={item.id}>{item.id}.{item.title}</Text>
            )) }
        </ScrollView>
    )
}