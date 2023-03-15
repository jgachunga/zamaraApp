import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomNav}  from './BottomNavigator';
import { navigationRef } from './RootNavigation';
import { LoginStackScreen } from './AppNavigator';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();
export default function AppIndex() {
  
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={'blue'}
      />
        <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginStackScreen}           initialRouteName="Login Screen"
            options={{headerShown: false}}
            
            ></Stack.Screen>
            <Stack.Screen name="BotomNavigation" component={BottomNav}
            options={{ title: 'BotomNavigation' }}
            screenOptions={{headerShown: false}}
            ></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}