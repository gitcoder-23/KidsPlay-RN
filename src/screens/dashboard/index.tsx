import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';

const Dashboard = () => {
  useEffect(() => {
    Orientation.lockToLandscape();

    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <View style={styles.homeMainContainer}>
      <Text>
        Welcome Kidz. This is your play zone{' '}
        <Text style={{ color: 'red', fontSize: 20 }}>Enjoy!!</Text>
      </Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
