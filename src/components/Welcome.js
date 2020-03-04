// import libraries for making a component
import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from './common';
import GetStarted from './GetStarted';
import { CardSection } from './common/CardSection';

// Make a component
const Welcomepage = ({ navigation }) => {
  const {
    textStyle,
    secondTextStyle,
    imageStyle,
    loginButtonStyles,
    signupButtonStyle,
  } = styles;
  return (
    <Card>
      <CardSection>
        <Text style={textStyle}>Welcome!</Text>
        <Text style={secondTextStyle}>
          With BDC.NG, you can exchange any currency in to the local currency
          with ease from our certified agents around you.
        </Text>
        <Image
          style={imageStyle}
          source={require('../assets/images/welcomepage-image.png')}
        />
        <Button
          buttonStyle={signupButtonStyle}
          onPress={() => navigation.navigate(GetStarted)}>
          Create an Account
        </Button>
        <Button buttonStyle={loginButtonStyles}>Log In</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#2A2E43',
    fontFamily: 'Circular Std Bold',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  secondTextStyle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    color: '#647394',
    fontFamily: 'Circular Std',
  },
  imageStyle: {
    marginBottom: 30,
  },
  signupButtonStyle: {
    backgroundColor: '#5E62EE',
  },
  loginButtonStyles: {
    backgroundColor: '#AFB8D6',
  },
});

// Make component available to other parts of the app
export default Welcomepage;
