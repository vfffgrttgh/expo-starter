import { Text, View, ScrollView } from 'react-native';
import { styles } from './utils/Styles';
import Profile from './components/Profile';
import React from 'react';
import WebView from 'react-native-webview';
import Loader from './components/Loader';
import Button from './components/Button';

export default function App() {
  return (
    <>
      <View style={styles.navbar}>
        <Profile />
      </View>
      <View style={styles.page}>
        <Text style={styles.header}>Aoby Jalalabad</Text>

        <React.Suspense fallback={<Loader />}>
          <ScrollView>
            <WebView
              source={{ uri: "https://aoblox.vercel.app" }}
              style={{ width: 350, height: 2650, margin: 20 }}
            />
          </ScrollView>

          <Text style={styles.header}>Aoblox</Text>
        </React.Suspense>
      </View>
    </>
  );
};