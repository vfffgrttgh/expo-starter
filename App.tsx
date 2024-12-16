import { Linking, ScrollView, Text, View } from 'react-native';
import { styles } from './utils/Styles';
import Profile from './components/Profile';
import React from 'react';
import Img from './components/Img';

export default function App() {
  return (
    <>
      <View style={styles.navbar}>
        <Profile />
      </View>

      <ScrollView style={styles.page}>
        <Text style={styles.header}>Welcome to React Native!</Text>

        <View style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaDruEVyNREIC5U5kX3nKRgMoxpbGw6VtPA&s' id={1} />
        </View>

        <Text style={{ color: "teal", fontSize: 25, fontWeight: 700, margin: 20 }}>
          With this minimal setup, you can go ahead and kickstart your Expo and React Native journey!
        </Text>
        <Text style={{ color: "teal", fontSize: 25, fontWeight: 700, margin: 20 }}>
          You can start by studying how all this works with the components/ and the utils/ folders. You can study the backend and Frontend.
        </Text>
      </ScrollView>
    </>
  );
};