import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import Staff from './pages/Staff';
import AddStaff from './pages/Staff/AddStaff';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContinentsView from './pages/Continents';

const Tab = createBottomTabNavigator();

const ContinentsScreen = () => {};

const StaffStack = createNativeStackNavigator();

function StaffStackScreen() {
  return (
    <StaffStack.Navigator screenOptions={{ headerShown: true}}>
      <StaffStack.Screen name="List Staff" component={Staff} />
      <StaffStack.Screen name="Add Staff" component={AddStaff} />
    </StaffStack.Navigator>
  );
}

export function BottomNav() {
  return (
    <Tab.Navigator initialRouteName='Staff'>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}
      />
      <Tab.Screen name="Staff" component={StaffStackScreen} 
      initialRouteName={'List Staff'}
      options={{
        tabBarLabel: 'Staff',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people-circle" color={color} size={size} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}/>
      <Tab.Screen name="Continents" component={ContinentsView} 
      options={{
        tabBarLabel: 'Continents',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="map" color={color} size={size} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}
      />
    </Tab.Navigator>
  );
}

