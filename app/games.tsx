import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { styles } from "../constants/Styles";
import Navbar from "../components/Navbar";
import Game from "../components/Game";
import Tabs from "../components/Tabs";

export default function GamesPage() {
    return (
        <>
            <ImageBackground source={require("../assets/background.png")} style={styles.page}>
                <Navbar />
                <ScrollView style={{ flex: 1, flexWrap:"wrap", flexDirection:"row" }}>
                    <Game uri="https://scratch.mit.edu/projects/957463402/embed" />
                    <Game uri="https://scratch.mit.edu/projects/957463508/embed" />
                    <Game uri="https://scratch.mit.edu/projects/971913863/embed" />
                </ScrollView>
                <Tabs />
            </ImageBackground>
        </>
    );
}