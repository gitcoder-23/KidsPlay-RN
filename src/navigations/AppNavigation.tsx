import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import Login from '../screens/auth/Login';
import Dashboard from '../screens/dashboard';

export type AppNavigationStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<AppNavigationStackParamList>();
const myOptions: StackNavigationOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0d283f',
    height: Platform.OS === 'ios' ? 60 : 50,
  },
  headerTitleAlign: 'center',

  headerTitleStyle: {
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '100',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-sarif',
  },
};

const AppNavigation = () => {
  return (
    <>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Welcome">
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ ...myOptions, headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={() => ({
                ...myOptions,
                headerShown: false,
                title: 'Login',
              })}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={() => ({
                ...myOptions,
                headerShown: false,
                title: 'Dashboard',
              })}
            />
          </>
        </Stack.Navigator>
      </View>
    </>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  innerScreenHead: {
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
});
