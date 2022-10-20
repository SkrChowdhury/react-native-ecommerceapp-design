import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  )
};

export default App;
