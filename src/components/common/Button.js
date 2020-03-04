import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children, buttonStyle }) => {
  const { defaultButtonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[defaultButtonStyle, buttonStyle]}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    borderRadius: 2,
    height: 54,
    width: 302,
    justifyContent: 'center',
    marginBottom: 20,
    borderColor: '#5E62EE',
  },
  textStyle: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18,
  },
});
export { Button };
