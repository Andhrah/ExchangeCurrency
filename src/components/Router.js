import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomepage from './Welcome';
import GetStarted from './GetStarted';
import Signup from './Signup';
import Verification from './Verification';
import Indentification from './Indentification';
import Selfie from './Selfie';
import SetSecurityPin from './SetSecurityPin';
import SaveSecurityPin from './SaveSecurityPin';
import AllDone from './AllDone';

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
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="SetSecurityPin" component={SetSecurityPin} />
        <Stack.Screen name="SaveSecurityPin" component={SaveSecurityPin} />
        <Stack.Screen name="AllDone" component={AllDone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
