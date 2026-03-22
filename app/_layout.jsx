import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

const RootLayout = () => {


    const colorScheme = useColorScheme();
    console.log(colorScheme)

  return (
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#4b97d2' }, // Your red color
        headerTintColor: '#fff', // White text looks better on red
        headerShown: true, // Ensure this is true to see the header
      }}
    >
        {/* 'name' must match the filename exactly (e.g., index.jsx) */}
        <Stack.Screen name='index' options={{ title: 'Home',headerBackButtonDisplayMode:false }} />
        <Stack.Screen name='profile' options={{ title: 'Profile' }} />
        <Stack.Screen name='editProfile' options={{ title: 'Edit Profile' }} />
        <Stack.Screen name='contact' options={{ title: 'Contact' }} />
    </Stack>
  );
};

export default RootLayout;