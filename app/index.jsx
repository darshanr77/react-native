import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from 'react-native';
import {Link} from 'expo-router';

const Home = () => {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        {/* Text Component */}
        <Text style={styles.title}>Welcome Home</Text>


        {/* Image Component - Requires a source prop */}
        <Image 
          source={{ uri: 'https://picsum.photos/200' }} 
          style={styles.image} 
        />



        {/* Pressable Component - The modern way to make buttons */}
        <Pressable 
          onPress={handlePress}
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.5 : 1 }
          ]}
        >
          <Text style={styles.buttonText}>Click Me</Text>
        </Pressable>

        {/* Profile page naviagtion */}
        <Link style={styles.link} href="/profile">Profile page</Link>

        <Link style={styles.link} href="/contact">Contact page</Link>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 5,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  link:{
    padding:10,
    margin:4,
    borderColor:'#4119d3'
  }
});

export default Home;