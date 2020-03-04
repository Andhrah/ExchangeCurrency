import 'react-native-gesture-handler';
import React from 'react';
import Welcomepage from './src/components/Welcome';
import Router from './src/components/Router';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Router style={{ flex: 1 }}>
      <Welcomepage />
    </Router>
  );
};

export default App;
