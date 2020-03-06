import React from 'react';
import { Screen, Router } from 'react-native-router-flux';
import Welcomepage from './Welcome';
import GetStarted from './GetStarted';
import Signup from './Signup';
import Verification from './Verification';
import Identification from './Identification';
import Selfie from './Selfie';
import SetSecurityPin from './SetSecurityPin';
import SaveSecurityPin from './SaveSecurityPin';
import AllDone from './AllDone';

const RouterComponent = () => {
  return (
    <Router>
      <Screen key="root" hideNavBar={true}>
        <Screen key="welcome" component={Welcomepage} />
        <Screen key="getStarted" component={GetStarted} />
        <Screen key="signup" component={Signup} />
        <Screen key="verification" component={Verification} />
        <Screen key="identification" component={Identification} />
        <Screen key="selfie" component={Selfie} />
        <Screen key="setSecurityPin" component={SetSecurityPin} />
        <Screen key="saveSecurityPin" component={SaveSecurityPin} />
        <Screen key="allDone" component={AllDone} />
      </Screen>
    </Router>
  );
};

export default RouterComponent;
