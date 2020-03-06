import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Card, Input, Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const SaveSecurityPin = () => {
  const {
    backArrowStyle,
    textStyle,
    secondTextStyle,
    inputStyle,
    inputViewStyle,
    secondInputViewStyle,
    savePinButtonstyle,
    lastInputStyle,
  } = styles;
  return (
    <Card>
      <TouchableOpacity onPress={() => Actions.pop()} style={backArrowStyle}>
        <Image source={require('../assets/images/backarrow-black-icon.png')} />
      </TouchableOpacity>
      <Text style={textStyle}>Set your PIN</Text>
      <Text style={secondTextStyle}>
        This will be used to authorize your signature
      </Text>
      <View style={inputViewStyle}>
        <View style={secondInputViewStyle}>
          <Input style={inputStyle} value="2" keyboardType="numeric" />
          <Input style={inputStyle} value="5" keyboardType="numeric" />
          <Input style={inputStyle} value="9" keyboardType="numeric" />
          <Input style={lastInputStyle} value="9" keyboardType="numeric" />
        </View>

        <CardSection>
          <Button
            onPress={() => Actions.allDone()}
            buttonStyle={savePinButtonstyle}>
            Save PIN
          </Button>
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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Circular Std Bold',
    fontWeight: 'bold',
  },
  secondTextStyle: {
    color: '#647394',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Circular Std Book',
    marginBottom: 60,
  },
  inputViewStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  secondInputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputTextStyle: {
    color: '#647394',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
    fontFamily: 'Circular Std Book',
  },
  inputStyle: {
    textAlign: 'center',
    borderColor: '#000D3733',
    borderWidth: 1,
    backgroundColor: '#64739408',
    height: 50,
    width: 50,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#2A2E43',
  },
  lastInputStyle: {
    backgroundColor: '#5E62EE',
    color: '#FFFFFF',
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  savePinButtonstyle: {
    backgroundColor: '#5E62EE',
    marginTop: 80,
  },
});

export default SaveSecurityPin;
