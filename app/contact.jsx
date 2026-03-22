import { StyleSheet, Text, View, Pressable} from 'react-native';
import {Link} from 'expo-router'
import React from 'react';

const contact = () => { // Capitalize component names (best practice)

  const handlePress = () => {
    console.log("button pressed");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Contact</Text>
      </Pressable>
      <Link href="/" style={styles.subText}>go back to home</Link>
    </View>
  );
};

export default contact;

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
    borderColor: '#2e2e2e',
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
  },
  subText: {
    fontSize: 38,
    marginTop: 20,
    color:'#2a2e2e',
    borderBottomWidth:3,
    borderBottomColor:'#051216'
  }
});