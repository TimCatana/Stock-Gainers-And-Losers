import React, {FC} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_ACTIVITY_INDICATOR} from '../../../../constants/Colors';
import useHomeScreen from './useHomeScreen';

const HomeScreen: FC = () => {
  const {isLoading, biggestGainers} = useHomeScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{biggestGainers}</Text>

      <ActivityIndicator
        style={styles.loading}
        animating={isLoading}
        size={hp('10%')}
        color={C_ACTIVITY_INDICATOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: hp('5%'),
    color: 'black',
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: hp('36%'),
    left: 0,
  },
});

export default HomeScreen;
