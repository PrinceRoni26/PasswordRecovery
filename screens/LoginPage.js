// screens/LoginPage.js
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/Comuni_Logo.jpg')} style={styles.logo} />

      {/* App Name */}
      <Text style={styles.appName}>CommUNI</Text>
      
      {/* Login Form */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        left={<TextInput.Icon icon={() => <Icon name="email" size={20} />} />}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        left={<TextInput.Icon icon={() => <Icon name="lock" size={20} />} />}
        style={styles.input}
      />
      
      <Button mode="contained" onPress={() => {}}>
        Login
      </Button>
      
      <Button onPress={() => navigation.navigate('Register')}>Create Account</Button>
      <Button onPress={() => navigation.navigate('PasswordRecovery')}>Forgot Password?</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',  // Make primary color red
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'pink',  // Add pink background or modify to gradient if needed
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  input: {
    width: '100%',
    marginBottom: 12,
  },
});
