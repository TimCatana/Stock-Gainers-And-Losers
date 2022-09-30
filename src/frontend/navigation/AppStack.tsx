import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../constants/NavigationConstants';
import {HomeScreen} from '../screens';
import {AppStackParamList} from './ScreenProps';

const Stack = createStackNavigator<AppStackParamList>();

/**
 * The authentication stack is only shown if the user is currently
 * not logged in to their account
 */
const AppStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.HOME_SCREEN}
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
