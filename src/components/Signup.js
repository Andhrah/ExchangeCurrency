/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Card, Input, Button, CardSection } from './common';

const Signup = ({ navigation }) => {
  const {
    backArrowStyle,
    textStyle,
    secondTextStyle,
    inputStyle,
    inputViewStyle,
    secondInputViewStyle,
    viewStyle,
    inputTextStyle,
    signupButtonstyle,
  } = styles;
  return (
    <Card>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={backArrowStyle}>
        <Image source={require('../assets/images/backarrow-black-icon.png')} />
      </TouchableOpacity>
      <Text style={textStyle}>Set up profile</Text>
      <Text style={secondTextStyle}>
        Enter your first name, last name, phone number and email
      </Text>
      <View style={inputViewStyle}>
        <View style={secondInputViewStyle}>
          <View style={viewStyle}>
            <Text style={inputTextStyle}>First Name</Text>
            <Input style={inputStyle} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={inputTextStyle}>Last Name</Text>
            <Input style={inputStyle} />
          </View>
        </View>

        <Text style={inputTextStyle}>Email Address</Text>
        <Input style={inputStyle} />

        <Text style={inputTextStyle}>Phone Number</Text>
        <Input style={inputStyle} />

        <CardSection>
          <Button buttonStyle={signupButtonstyle}>Create an Account</Button>
        </CardSection>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  backArrowStyle: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  textStyle: {
    marginTop: 50,
    marginBottom: 10,
    color: '#2A2E43',
    fontSize: 26,
    fontFamily: 'Circular Std Bold',
    fontWeight: 'bold',
  },
  secondTextStyle: {
    color: '#647394',
    fontSize: 14,
    fontFamily: 'Circular Std Book',
    marginBottom: 60,
  },
  inputViewStyle: {
    flexDirection: 'column',
  },
  secondInputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewStyle: {
    flex: 1,
    marginRight: 20,
  },
  inputTextStyle: {
    color: '#647394',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
    fontFamily: 'Circular Std Book',
  },
  inputStyle: {
    borderColor: '#000D3733',
    borderWidth: 1,
    backgroundColor: '#64739408',
    height: 50,
    marginBottom: 15,
  },
  signupButtonstyle: {
    backgroundColor: '#5E62EE',
    marginTop: 25,
  },
});

export default Signup;
