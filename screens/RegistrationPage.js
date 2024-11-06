// screens/RegistrationPage.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RegistrationPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Register</Text>
      
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
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        left={<TextInput.Icon icon={() => <Icon name="lock" size={20} />} />}
        style={styles.input}
      />

      <Button mode="contained" onPress={() => {}}>
        Register
      </Button>

      <Button onPress={() => navigation.navigate('Login')}>Already have an account? Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { marginBottom: 12 },
});
