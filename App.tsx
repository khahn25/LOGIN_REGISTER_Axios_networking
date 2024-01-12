import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const StackNavigator = createStackNavigator({
  RegisterScreen: {
    screen: RegisterScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  HomeScreen: { screen:  HomeScreen}
}, {
  initialRouteName: "RegisterScreen"
})

 
export default createAppContainer(StackNavigator)