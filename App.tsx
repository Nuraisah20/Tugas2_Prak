import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './srcreens/LoginScreen.tsx';
import HomeScreen  from './srcreens/HomeScreen.tsx'
import ProfileScreen from './srcreens/ProfileScreen.tsx';
import Icon from '@react-native-vector-icons/ionicons';
import SettingScreen from './srcreens/SettingScreen.tsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Home" 
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Laundry" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="today" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Profile" 
      component={SettingScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="today" color={color} size={size} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

// Main Stack Navigator
const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen 
      name="Login" 
      component={LoginScreen} 
      options={{ headerShown: false }} // Sembunyikan header di halaman login
    />
    <Stack.Screen 
      name="Main" 
      component={MainTabNavigator} 
      options={{ headerShown: false }} // Sembunyikan header di halaman utama (yang memiliki bottom tab)
    />
  </Stack.Navigator>
);

export default function App(){
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
