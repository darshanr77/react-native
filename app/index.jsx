import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from './constants/Colors';
import ThemedView from '../components/ThemedView';

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedView style={styles.card}>
        <Text style={styles.title}>Welcome Home</Text>

        <Image 
          source={{ uri: 'https://picsum.photos/400' }} 
          style={styles.image} 
        />

        <View style={styles.buttonContainer}>
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
      </ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#181212',
    width: '90%',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#d7c5c5',
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
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#b62929',
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