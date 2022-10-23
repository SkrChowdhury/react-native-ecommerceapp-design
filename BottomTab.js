import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/HomeScreen';
import SubjectScreen from './app/screens/SubjectScreen';
import CartScreen from './app/screens/CartScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{tabBarShowLabel:true,tabBarActiveTintColor:'#5f9ea0',headerShown:false}}
    
    >
        <Tab.Screen 
        name='Home'
        component={HomeScreen}         
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color='#5f9ea0' size={25}/>
          ),
        }} />
        <Tab.Screen 
        name='Subject'
        component={SubjectScreen} 
        options={{
          tabBarLabel: 'Subject',
          tabBarIcon: ({ color, size }) => (
            <Icon name='bars' color='#5f9ea0' size={25}/>
          ),
        }} />
        <Tab.Screen 
        name='Cart'
        component={CartScreen} 
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Icon name='shopping-cart' color='#5f9ea0' size={25}/>
          ),
        }} />
        <Tab.Screen 
        name='Profile'
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color='#5f9ea0' size={25}/>
          ),
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({

})