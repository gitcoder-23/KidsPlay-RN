import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStatusBar from '../common/AppStatusBar';
import AppNavigation from '../navigations/AppNavigation';

export const AppInitializer = () => {
  return (
    <>
      <View style={styles.container}>
        <AppStatusBar backgroundColor="#0d283f" barStyle="light-content" />

        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0ce61',
  },
});
