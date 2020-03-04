import React from 'react';
import { View } from 'react-native';

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingLeft: 30,
    paddingRight: 30,
  },
};
export { Card };
