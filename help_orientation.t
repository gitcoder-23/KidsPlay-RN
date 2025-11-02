// URL for react-native-orientation-locker


https://github.com/wonday/react-native-orientation-locker
https://stackoverflow.com/questions/67069672/react-native-orientation-is-not-working-locking-on-ios
https://github.com/WrathChaos/react-native-portrait-locker-example

In Xcode, with the KidzPlay target selected (as in your screenshot),
go to Build Settings → scroll (or search) for
“Objective-C Bridging Header” under Swift Compiler – General.

You’ll see two rows — Debug and Release — both are currently empty.

Double-click inside the Debug field (the empty cell on the right).
A small popup editor will appear.

Paste this path (depending on where your header file is located):

✅ If your file is inside ios/KidzPlay/:
$(PROJECT_DIR)/KidzPlay/KidzPlay-Bridging-Header.h

⚠️ If it’s directly under ios/:
$(PROJECT_DIR)/KidzPlay-Bridging-Header.h


Hit Enter to confirm.

Repeat the same for Release → paste the same path there.

You should now see something like this:

Debug:   $(PROJECT_DIR)/KidzPlay-Bridging-Header.h
Release: $(PROJECT_DIR)/KidzPlay-Bridging-Header.h



// URL for Expo
https://blog.logrocket.com/managing-orientation-changes-react-native-apps/
🧩 Essence

Use expo-screen-orientation (if using Expo) or react-native-orientation-locker (for bare React Native) to lock the orientation when navigating to the Dashboard.

⚙️ Implementation Steps
Option 1 — If using Expo (recommended and simpler)

Install the library:

npm install expo-screen-orientation


or

yarn add expo-screen-orientation

| Line                                                       | Purpose                                                               |
| ---------------------------------------------------------- | --------------------------------------------------------------------- |
| `import expo.modules.*`                                    | Brings in the Expo core runtime                                       |
| `ReactNativeHostWrapper(...)`                              | Wraps your host to enable Expo modules like `expo-screen-orientation` |
| `ApplicationLifecycleDispatcher.onApplicationCreate(this)` | Initializes Expo module lifecycle                                     |
| `onTerminate()` override                                   | Cleanly shuts down Expo modules when app terminates                   |


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





// Expo orientation
✅ Here’s the corrected version
<activity
    android:name=".MainActivity"
    android:label="@string/app_name"
    android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
    android:launchMode="singleTask"
    android:windowSoftInputMode="adjustResize"
    android:exported="true"
    android:screenOrientation="unspecified">
    
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>

⚙️ Explanation of the key part:
Attribute	Why it matters
android:screenOrientation="unspecified"	✅ Allows expo-screen-orientation to programmatically control rotation at runtime (portrait, landscape, etc.).
android:configChanges	✅ Keeps your React Native activity alive during orientation changes (prevents full reload).
android:windowSoftInputMode="adjustResize"	✅ Keeps input fields visible when keyboard opens.
android:exported="true"	✅ Required for Android 12+.
android:launchMode="singleTask"	✅ Correct for React Native entry activity.
❌ Common mistake to avoid

If you accidentally set

android:screenOrientation="portrait"


→ then expo-screen-orientation.lockAsync() will not work, because the OS will override it.

So keeping it "unspecified" is correct. ✅

✅ TL;DR —
Your final <activity> is correct with this one small addition:

android:screenOrientation="unspecified"


Would you like me to show how to test that the lock is actually working (e.g., temporarily force LANDSCAPE when entering a screen)?