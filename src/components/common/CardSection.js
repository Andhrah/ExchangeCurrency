import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
  return <View style={[styles.viewStyle, props.style]}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
};
export { CardSection };
