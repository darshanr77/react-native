import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';
import {StatusBar} from 'expo-status-bar'
import { Colors } from './constants/Colors';

const RootLayout = () => {


    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
      {/* for auto light and dark mode for time data and charge */}
      <StatusBar value="auto" /> 
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground }, // Your red color
          headerTintColor: theme.title, // White text looks better on red
          headerShown: true, // Ensure this is true to see the header
        }}
      >
        {/* 'name' must match the filename exactly (e.g., index.jsx) */}
        <Stack.Screen name='index' options={{ title: 'Home', headerBackButtonDisplayMode: false }} />
        <Stack.Screen name='profile' options={{ title: 'Profile' }} />
        <Stack.Screen name='editProfile' options={{ title: 'Edit Profile' }} />
        <Stack.Screen name='contact' options={{ title: 'Contact' }} />
      </Stack>
    </>
  );
};

export default RootLayout;