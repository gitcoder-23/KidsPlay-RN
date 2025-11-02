import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Dashboard = () => {
  return (
    <View style={styles.homeMainContainer}>
      <Text>Welcome Kidz. This is your play zone!!</Text>
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
