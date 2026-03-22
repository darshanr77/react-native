import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Home</Text>
        
        <Image 
          source={{ uri: 'https://picsum.photos/400' }} 
          style={styles.image} 
        />

        <View style={styles.buttonContainer}>
          {/* We wrap the Link around a Pressable or View to make it look like a real button */}
          <Link href="/profile" asChild>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.buttonText}>Go to Profile</Text>
            </Pressable>
          </Link>

          <Link href="/contact" asChild>
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Contact Support</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Light grey background
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 24,
    borderRadius: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 25,
  },
  buttonContainer: {
    width: '100%',
    gap: 12, // Space between buttons (React Native 0.71+)
  },
  primaryButton: {
    backgroundColor: '#b62929', // Matching your header color
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#b62929',
  },
  secondaryButtonText: {
    color: '#b62929',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Home;