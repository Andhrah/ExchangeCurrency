import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from './common';
import { CardSection } from './common/CardSection';
import Selfie from './Selfie';

const Indentification = ({ navigation }) => {
  const {
    linearGradient,
    backArrowStyle,
    textStyle,
    imageStyle,
    containerViewStyle,
    viewStyle,
    imageViewStyle,
    selfieImageStyle,
    textButtonStyle,
    imageTextStyle,
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
        <Text style={textStyle}>Identification</Text>
        <Image
          style={imageStyle}
          source={require('../assets/images/Ellipses.png')}
        />
        <View style={containerViewStyle}>
          <View style={imageViewStyle}>
            <Text style={imageTextStyle}>Take Selfie</Text>
            <Image
              style={selfieImageStyle}
              source={require('../assets/images/user-selfie-icon.png')}
            />
          </View>

          <View style={viewStyle}>
            <Text style={textButtonStyle}>1</Text>
            <View style={secondViewStyle}>
              <Text style={boxTextStyle}>Good Lighting</Text>
              <Text style={secondBoxTextStyle}>
                Make sure you are in a well lit environment and both ears are
                uncovered
              </Text>
            </View>
          </View>

          <View style={viewStyle}>
            <Text style={textButtonStyle}>2</Text>
            <View style={secondViewStyle}>
              <Text style={boxTextStyle}>Look Straight</Text>
              <Text style={secondBoxTextStyle}>
                Hold your phone at eye level and look straight at the camera
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <CardSection style={buttonViewStyle}>
        <Button
          onPress={() => navigation.navigate(Selfie)}
          buttonStyle={getStartedButtonStyle}>
          Take Selfie
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
    marginTop: 30,
    color: '#FFFFFF',
    fontFamily: 'Circular Std Bold',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageStyle: {
    marginBottom: 20,
  },
  secondTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 35,
    color: '#FFFFFF',
    fontFamily: 'Circular Std',
  },
  containerViewStyle: {
    backgroundColor: '#FFFFFF',
    height: 400,
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
  imageViewStyle: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  imageTextStyle: {
    color: '#2A2E43',
    fontSize: 15,
    fontWeight: 'bold',
  },
  selfieImageStyle: {
    marginTop: 10,
    height: 100,
    width: 100,
  },
  textButtonStyle: {
    marginRight: 30,
    backgroundColor: '#5E62EE',
    borderRadius: 100,
    width: 34,
    height: 34,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  },
  boxTextStyle: {
    color: '#2A2E43',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  secondBoxTextStyle: {
    color: '#647394',
    textAlign: 'left',
    fontFamily: 'Circular Std Book',
    fontSize: 15,
  },
  buttonViewStyle: {
    marginTop: 320,
    alignItems: 'center',
  },
  getStartedButtonStyle: {
    backgroundColor: '#5E62EE',
  },
});

export default Indentification;
