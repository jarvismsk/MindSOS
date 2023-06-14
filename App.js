import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListDoctor from './src/screens/ListDoctor/ListDoctor';
import SingleDoctor from './src/screens/SingleDoctor/SingleDoctor';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Bot from './src/screens/Bot/Bot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Bot" component={Bot}/>
        <Stack.Screen name="ListDoctor" component={ListDoctor} />
        <Stack.Screen name="SingleDoctor" component={SingleDoctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
