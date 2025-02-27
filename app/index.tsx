import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "../constants/Styles";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Tabs from "../components/Tabs";

export default function HomePage() {
  return (
    <>
      <ImageBackground source={require("../assets/background.png")} style={styles.page}>
        <Navbar />

        <Grid />

        <Tabs />
      </ImageBackground>
      <StatusBar style="auto" />
    </>
  );
}
