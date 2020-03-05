import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomepage from './Welcome';
import GetStarted from './GetStarted';
import Signup from './Signup';
import Verification from './Verification';
import Indentification from './Indentification';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Welcomepage} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Indentification" component={Indentification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
