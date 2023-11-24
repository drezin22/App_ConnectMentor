import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import{useFonts, Anton_400Regular} from '@expo-google-fonts/anton'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {

let [ fontsLoades] = useFonts({
 Anton_400Regular,

});

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}


