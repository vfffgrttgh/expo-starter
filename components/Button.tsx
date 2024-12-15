import { TouchableOpacity, ScrollView, Text } from "react-native"
import { styles } from "../utils/Styles"
import React from "react";

type props = {
    onClick: any;
    children: any;
    color: any;
}

export default function Button(props: props) {
    return (
        <>
            {props.color === "blue" && <ScrollView>
                <TouchableOpacity onPress={props.onClick} style={styles.blueButton}>
                    <Text style={styles.text}>{props.children}</Text>
                </TouchableOpacity>
            </ScrollView>}

            {props.color === "red" && <ScrollView>
                <TouchableOpacity onPress={props.onClick} style={styles.redButton}>
                    <Text style={styles.text}>{props.children}</Text>
                </TouchableOpacity>
            </ScrollView>}

            {props.color === "green" && <ScrollView>
                <TouchableOpacity onPress={props.onClick} style={styles.greenButton}>
                    <Text style={styles.text}>{props.children}</Text>
                </TouchableOpacity>
            </ScrollView>}

            {props.color === "yellow" && <ScrollView>
                <TouchableOpacity onPress={props.onClick} style={styles.yellowButton}>
                    <Text style={styles.text}>{props.children}</Text>
                </TouchableOpacity>
            </ScrollView>}

            {props.color === "purple" && <ScrollView>
                <TouchableOpacity onPress={props.onClick} style={styles.purpleButton}>
                    <Text style={styles.text}>{props.children}</Text>
                </TouchableOpacity>
            </ScrollView>}
        </>
    )
}