import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListDoctor from './src/screens/Doctor/ListDoctor';
import SingleDoctor from './src/screens/Doctor/SingleDoctor';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DoctorList" component={ListDoctor} />
        <Stack.Screen name="SingleDoctor" component={SingleDoctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
