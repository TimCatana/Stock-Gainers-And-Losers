import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
