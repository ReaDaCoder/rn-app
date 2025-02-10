import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Alert, Image,Pressable } from 'react-native';
import {Link} from 'expo-router';
import axios from 'axios';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios
    .post('https://restaurant-app-backend-sandy.vercel.app/api/login', { email, password })
    .then(async (result) => {
      console.log({ result });

      if (result.data.token) {
        await AsyncStorage.setItem('authToken', result.data.token);  // ✅ Store token
        Alert.alert('Login Successful', 'Welcome to the app!');      // ✅ User feedback
        router.push('/dashboard');                                   // ✅ Navigate to dashboard
      } else {
        Alert.alert('Login Failed', 'Invalid credentials. Please try again.');  // ✅ Handle invalid login
      }
    })
    .catch((err) => {
      console.log(err);
      Alert.alert('Error', 'Something went wrong. Please try again later.');   // ✅ Handle server errors
    });
  };
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/images/food-plate.jpg')}
      style={{ width: 350, height: 300, marginBottom: 35, borderRadius: 200 }}
    />
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={(value) => setEmail(value)}
      keyboardType="email-address"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={(value) => setPassword(value)}
      secureTextEntry
    />
    <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Login</Text>
    </Pressable>
    <Text style={styles.link}>Forgot password?</Text>
    <Text style={styles.newUser}>New user?</Text>
    <Link href="/explore" style={styles.signup}>
      Sign up
    </Link>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FF4C52',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ffffff',
    backgroundColor: '#FFFFFF',
    height: 40,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  link: {
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  newUser: {
    color: '#FFFFFF',
    marginTop: 20,
  },
  signup: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

