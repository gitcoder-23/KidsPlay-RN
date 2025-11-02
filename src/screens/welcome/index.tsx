import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const logoImg = require('../../assets/images/kidzplay.png');
const Height = Dimensions.get('window').height;
type WelcomeType = {
  navigation: any;
  route: any;
};
const Welcome = ({ navigation }: WelcomeType) => {
  const [loading, setLoading] = useState<boolean>(false);

  // const clickPress = () => {
  //   navigation.navigate('Login');
  // };

  const arrowPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Login');
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Login');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <Image source={logoImg} style={styles.logoImg} />
      <Text style={styles.welComeText}>Welcome to Kidz Play</Text>
      {loading ? (
        <>
          <ActivityIndicator
            size="large"
            color="#2091c9"
            animating={loading}
            style={loading ? styles.show : styles.hide}
          />
        </>
      ) : (
        <>
          <TouchableOpacity onPress={arrowPress}>
            <Text>
              <MaterialIcons
                name="arrow-circle-right"
                size={50}
                color="#ffffff"
              />
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d283f',
    flex: 1,
  },
  welComeText: { marginBottom: 10, fontSize: 30, color: '#fff' },
  show: {},
  hide: {
    display: 'none',
  },
  logoImg: {
    resizeMode: 'stretch',
    marginTop: Height >= 700 ? '10%' : '3%',
    height: 220,
    width: 240,
    marginBottom: '4%',
  },
});
