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
    screenOptions={{
      tabBarShowLabel:true,tabBarActiveTintColor:'#3AB68F',
      tabBarInactiveTintColor:'#CACACA',
      headerShown:false,
      tabBarStyle: { 
        height: 60,
        borderTopRightRadius:40, 
        borderTopLeftRadius:40 
      }
    }}
    >
        <Tab.Screen 
        
        name='Home'
        component={HomeScreen}         
        options={{
          tabBarLabelStyle:'',
          tabBarLabel: 'Home',
          tabBarLabelPosition:'below-icon',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home'  color='#CACACA' size={30}/>
          ),
        }} />
        <Tab.Screen 
        name='Subject'
        component={SubjectScreen} 
        options={{
          tabBarLabel: 'Subject',
          tabBarIcon: ({ color, size }) => (
            <Icon name='bars' color='#CACACA' size={30}/>
          ),
        }} />
        <Tab.Screen 
        name='Cart'
        component={CartScreen} 
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Icon name='shopping-cart' color='#CACACA' size={30}/>
          ),
        }} />
        <Tab.Screen 
        name='Profile'
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color='#CACACA' size={30}/>
          ),
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({

})