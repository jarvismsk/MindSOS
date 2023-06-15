import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListDoctor from './src/screens/ListDoctor/ListDoctor';
import SingleDoctor from './src/screens/SingleDoctor/SingleDoctor';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Bot from './src/screens/Bot/Bot';
import ChatScreen from './src/screens/ChatScreen/ChatScreen';

const Stack = createStackNavigator();

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Set up Axios with default base URL
axios.defaults.baseURL = 'http://your-backend-url/api';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Bot" component={Bot} />
          <Stack.Screen name="ListDoctor" component={ListDoctor} />
          <Stack.Screen name="SingleDoctor" component={SingleDoctor} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
