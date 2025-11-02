🧩 Essence

Use expo-screen-orientation (if using Expo) or react-native-orientation-locker (for bare React Native) to lock the orientation when navigating to the Dashboard.

⚙️ Implementation Steps
Option 1 — If using Expo (recommended and simpler)

Install the library:

npm install expo-screen-orientation


or

yarn add expo-screen-orientation


Import and lock orientation inside Dashboard:

import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

const Dashboard = () => {
  useEffect(() => {
    const lockToLandscape = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };
    lockToLandscape();

    // Optional: Unlock when leaving dashboard
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

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


✅ This will automatically switch to landscape mode when you enter the Dashboard screen and return to portrait when you leave.

Option 2 — If using bare React Native (no Expo)

Install the orientation locker:

npm install react-native-orientation-locker


or

yarn add react-native-orientation-locker


Link it (if needed):

npx pod-install


Use inside your Dashboard:

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

🚀 Integration Flow

You don’t need to change your Login screen logic — the line

navigation.replace('Dashboard');


will automatically trigger the Dashboard screen, and the orientation will switch due to the useEffect inside it.