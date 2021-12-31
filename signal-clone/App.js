import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import loginScreen from './screens/loginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const globalScreenOption={
  headerStyle: {backgroundColor :"#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"while",

};

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOption={globalScreenOption}>
    <Stack.Screen name="LogIn" component={loginScreen} /> 
    <Stack.Screen name="Register" component={RegisterScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
