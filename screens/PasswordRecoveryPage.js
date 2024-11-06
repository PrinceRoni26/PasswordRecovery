// screens/PasswordRecoveryPage.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PasswordRecoveryPage({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">Recover Password</Text>
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        left={<TextInput.Icon icon={() => <Icon name="email" size={20} />} />}
        style={styles.input}
      />

      <Button mode="contained" onPress={() => {}}>
        Send Recovery Email
      </Button>

      <Button onPress={() => navigation.navigate('Login')}>Back to Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { marginBottom: 12 },
});
