import { ScrollView, Text, View } from 'react-native';
import { styles } from '../utils/Styles';
import Profile from '../components/Profile';
import React from 'react';
import Img from '../components/Img';
import { Link } from 'expo-router';

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
        <Link href="/fetch" style={{ color: "teal", fontSize: 25, fontWeight: 700, margin: 20 }}>Try Fetching</Link>
        <Link href="/maps" style={{ color: "teal", fontSize: 25, fontWeight: 700, margin: 20 }}>Try Maps</Link>
        <Link href="/webview" style={{ color: "teal", fontSize: 25, fontWeight: 700, margin: 20 }}>Try WebView</Link>
        <Link href="/form" style={{ color: "teal", fontSize: 25, fontWeight: 700, margin: 20 }}>Try Form Demo</Link>
      </ScrollView>
    </>
  );
};