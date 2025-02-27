import { TouchableHighlight, Text } from "react-native"
import { styles } from "../constants/Styles"
import React from "react";

type props = {
    onClick?: any;
    children: any;
    color: string;
    options?: {
        marginLeft?: number,
        marginBottom?: number,
        width?: number,
        height?: number,
        marginTop?: number,
        br?: number,
        alignSelf?: "center" | "flex-end",
        marginRight?: number,
    };
}

export default function Button(props: props) {
    return (
        <>
            <TouchableHighlight onPress={props.onClick} style={[{
                backgroundColor: props.color,
                borderRadius: props.options?.br,
                width: props.options?.width,
                height: props.options?.height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: props.options?.alignSelf,
            }, props.options]}>
                <Text style={styles.text}>{props.children}</Text>
            </TouchableHighlight>
        </>
    )
}