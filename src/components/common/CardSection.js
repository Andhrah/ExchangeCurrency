import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#F9F9F9',
  },
};
export { CardSection };
