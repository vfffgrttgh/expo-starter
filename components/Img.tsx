import { Image } from "react-native";
import { styles } from "../utils/Styles";
import React from "react";

type img = {
    src: string;
    id: number;
}

export default function Img({src, id}: img) {
    return (
        <Image
            source={{ uri: src }}
            key={id}
            style={styles.img}
        />
    )
}