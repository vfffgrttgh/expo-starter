import { Text, View, ScrollView, TextInputComponent, Button } from 'react-native';
import { styles } from './utils/Styles';
import Profile from './components/Profile';
import WebView from 'react-native-webview';
import Loader from './components/Loader';
import React, { Suspense, useEffect, useState } from 'react';
import MapPage from './components/MapPage';
import { POST, GET } from './utils/Fetching';

export default function App() {
  const [id, setID] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [amount, set] = useState<any>([]);

  function handleSubmit() {
    POST({ id: id, value: value, type: "XML"});

    const fetchData = GET("XML");

    set(fetchData);
  };

  return (
    <>
      <View style={styles.navbar}>
        <Profile />
        <Text style={styles.text}>Navbar</Text>
      </View> {/* Navbar */}

      <ScrollView style={styles.page}>
        <Text style={styles.header}>Aoby Jalalabad | Gaming</Text>

        <Suspense fallback={<Loader />}>
          <ScrollView>
            <WebView
              source={{ uri: "https://aoby-jalalabad.netlify.app" }}
              style={{ width: 350, height: 2650, margin: 20 }}
            />
          </ScrollView>
        </Suspense> {/* Gaming */}

        <MapPage /> {/* Mapping */}
      </ScrollView>

      <View style={styles.page}> {/* FROM */}
        <TextInputComponent defaultValue={id} onChangeText={e => setID(e)} style={styles.input} />
        <TextInputComponent defaultValue={value} onChangeText={e => setValue(e)} style={styles.input} />
        <Button title='SUBMIT' onPress={handleSubmit} />

        { amount.map((item: any) => (
          <Text style={styles.text} key={item.id}>{item.value}</Text>
        )) }
      </View>
    </>
  );
};