import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, CardSection } from './common';

const AllDone = () => {
  const { viewStyle, textStyle, secondTextStyle, allDoneButtonstyle } = styles;
  return (
    <Card>
      <View style={viewStyle}>
        <Text style={textStyle}>All Done!</Text>
        <Text style={secondTextStyle}>
          Hooray!!! You've successfully created your account, proceed to the
          dashboard to exchange your currency
        </Text>

        <CardSection>
          <Button buttonStyle={allDoneButtonstyle}>Proceed</Button>
        </CardSection>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    marginTop: 100,
    marginBottom: 10,
    color: '#2A2E43',
    fontSize: 22,
    fontFamily: 'Circular Std Bold',
    fontWeight: 'bold',
  },
  secondTextStyle: {
    color: '#647394',
    fontSize: 14,
    fontFamily: 'Circular Std Book',
    marginBottom: 10,
  },
  allDoneButtonstyle: {
    backgroundColor: '#5E62EE',
    marginTop: 80,
  },
});

export default AllDone;
