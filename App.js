import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginPage from './screens/LoginPage';
import RegistrationPage from './screens/RegistrationPage';
import PasswordRecoveryPage from './screens/PasswordRecoveryPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegistrationPage} />
          <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
