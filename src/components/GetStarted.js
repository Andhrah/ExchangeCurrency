import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from './common';
import { CardSection } from './common/CardSection';
import Signup from './Signup';

const GetStarted = ({ navigation }) => {
  const {
    linearGradient,
    backArrowStyle,
    textStyle,
    secondTextStyle,
    containerViewStyle,
    viewStyle,
    imageStyle,
    boxTextStyle,
    secondBoxTextStyle,
    secondViewStyle,
    buttonViewStyle,
    getStartedButtonStyle,
  } = styles;
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#5E62EE', '#5E62EE', '#5E9CEE']}
        style={linearGradient}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={backArrowStyle}>
          <Image
            source={require('../assets/images/backarrow-white-icon.png')}
          />
        </TouchableOpacity>
        <Text style={textStyle}>Let's get started</Text>
        <Text style={secondTextStyle}>
          To create your BDC.NG account, you'll need to do these 3 simple steps
        </Text>
        <View style={containerViewStyle}>
          <View style={viewStyle}>
            <Image
              style={imageStyle}
              source={require('../assets/images/user-icon.png')}
            />
            <View style={secondViewStyle}>
              <Text style={boxTextStyle}>Set up profile</Text>
              <Text style={secondBoxTextStyle}>
                Enter your first name, last name, phone number and email
              </Text>
            </View>
          </View>

          <View style={viewStyle}>
            <Image
              style={imageStyle}
              source={require('../assets/images/selfie-icon.png')}
            />
            <View style={secondViewStyle}>
              <Text style={boxTextStyle}>Take a selfie</Text>
              <Text style={secondBoxTextStyle}>
                Selfie with your front camera to identify your identity
              </Text>
            </View>
          </View>

          <View style={viewStyle}>
            <Image
              style={imageStyle}
              source={require('../assets/images/locked-icon.png')}
            />
            <View style={secondViewStyle}>
              <Text style={boxTextStyle}>Set Pin</Text>
              <Text style={secondBoxTextStyle}>
                This will be used to authorize your transactions
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <CardSection style={buttonViewStyle}>
        <Button
          onPress={() => navigation.navigate(Signup)}
          buttonStyle={getStartedButtonStyle}>
          Let's get started
        </Button>
      </CardSection>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 314,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backArrowStyle: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  textStyle: {
    marginTop: 40,
    color: '#FFFFFF',
    fontFamily: 'Circular Std Bold',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  secondTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 25,
    color: '#FFFFFF',
    fontFamily: 'Circular Std',
  },
  containerViewStyle: {
    backgroundColor: '#FFFFFF',
    height: 350,
    width: 302,
    padding: 20,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  secondViewStyle: {
    flex: 1,
  },
  imageStyle: {
    marginRight: 30,
  },
  boxTextStyle: {
    color: '#2A2E43',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  secondBoxTextStyle: {
    color: '#647394',
    textAlign: 'left',
    fontFamily: 'Circular Std Book',
    fontSize: 14,
  },
  buttonViewStyle: {
    marginTop: 300,
    alignItems: 'center',
  },
  getStartedButtonStyle: {
    backgroundColor: '#5E62EE',
  },
});

export default GetStarted;
