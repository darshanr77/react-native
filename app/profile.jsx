import { StyleSheet, Text, View, Pressable, useColorScheme} from 'react-native';
import {Link} from 'expo-router'
import React from 'react';
import { Colors } from './constants/Colors';

const Profile = () => { // Capitalize component names (best practice)

  const handlePress = () => {
    console.log("button pressed");
  };

   const colorScheme = useColorScheme();
   const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container , { backgroundColor : theme.background } ]}>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>profile</Text>
      </Pressable>
      <Link href="/" style={styles.subText}>go back to home</Link>
      <Link href="/editProfile" style={styles.subText}>Edit profile</Link>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#d51515',
    fontSize: 40, // 100 is huge for mobile screens!
    fontStyle: 'italic',
    fontWeight: '700', // Must be a string
    borderColor: '#dbc3c3',
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
  subText: {
    fontSize: 38,
    marginTop: 20,
    color:'#85a6a6',
        borderBottomWidth:3,
    borderBottomColor:'#051216'
  }
});