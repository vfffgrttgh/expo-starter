import React from "react";
import { TextInput } from "react-native";
import { styles } from "../constants/Styles";

type props = {
    placeholder?: string;
    value?: string;
    onChange?: any;
};

export default function Feild(props: props) {
    return (
        <>
            <TextInput 
                style={styles.input} 
                placeholder={props.placeholder} 
                defaultValue={props.value} 
                onChangeText={props.onChange} 
                placeholderTextColor="blue" 
            />
        </>
    )
};