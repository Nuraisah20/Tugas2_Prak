import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementasi logika untuk login
    // Misalnya, jika username dan password benar, arahkan ke halaman utama
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Main'); // Navigasi ke halaman utama setelah login
    } else {
      Alert.alert('Username atau password salah!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={{ uri: 'https://image.freepik.com/free-vector/laundry-cleaning-illustration-with-washing-machine_24908-59523.jpg' }} // Ganti dengan gambar logo Anda
          style={styles.logoBackground}
          resizeMode="contain"
        >
          {/* Tidak perlu menempatkan teks di dalam ImageBackground */}
        </ImageBackground>
        <Text style={styles.logoText}>Laundry App</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaaaaa"
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdab9', // Peach color background
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoBackground: {
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for better readability
    padding: 10,
    borderRadius: 8,
    marginTop: 10, // Adjust this value for spacing between logo and text
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
