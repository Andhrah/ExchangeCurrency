import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const Selfie = () => {
  const {
    backArrowStyle,
    textStyle,
    secondTextStyle,
    thirdTextStyle,
    imageStyle,
    proceedButtonstyle,
    retakePhotoButtonstyle,
  } = styles;
  return (
    <Card>
      <TouchableOpacity onPress={() => Actions.pop()} style={backArrowStyle}>
        <Image source={require('../assets/images/backarrow-black-icon.png')} />
      </TouchableOpacity>
      <Text style={textStyle}>Selfie Done</Text>
      <CardSection>
        <Image
          style={imageStyle}
          source={require('../assets/images/selfie-image.png')}
        />
        <Text style={secondTextStyle}>Is this clear enough?</Text>
        <Text style={thirdTextStyle}>
          If you are okay with the selfie, please proceed
        </Text>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => Actions.setSecurityPin()}
          buttonStyle={proceedButtonstyle}>
          Proceed
        </Button>

        <Button
          onPress={() => Actions.identification()}
          buttonStyle={retakePhotoButtonstyle}>
          Retake Photo
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  backArrowStyle: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  textStyle: {
    marginTop: 20,
    marginBottom: 30,
    color: '#2A2E43',
    fontSize: 22,
    fontFamily: 'Circular Std Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondTextStyle: {
    color: '#2A2E43',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Circular Std Book',
    marginBottom: 10,
  },
  thirdTextStyle: {
    color: '#647394',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 90,
  },
  imageStyle: {
    width: 250,
    height: 250,
  },

  proceedButtonstyle: {
    backgroundColor: '#5E62EE',
    marginTop: 20,
    marginBottom: 10,
  },
  retakePhotoButtonstyle: {
    backgroundColor: '#AFB8D6',
    marginTop: 10,
  },
});

export default Selfie;
