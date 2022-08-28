import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Icon, Button, IconRegistry, Input } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './src/assets/theme.json';
import Home from './src/screens/Home';


export default function App() {
  const HomeScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h2'>HOME</Text>
    </Layout>
  );



  return (
    // <View>
    // <SafeAreaView>
    //   <StatusBar/>
    //   <Home/>
    // </SafeAreaView>

    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} >
      <Home />
      {/* <Input placeholder='Buscar musica' /> */}
    </ApplicationProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
