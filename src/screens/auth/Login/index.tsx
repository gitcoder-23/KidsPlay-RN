import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

type loginType = {
  navigation: any;
  route: any;
};

const Login = ({ navigation }: loginType) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState('');

  const loginPress = () => {
    Keyboard.dismiss();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || email.trim() === '') {
      setError('Please enter email');
      setTimeout(() => {
        setError('');
      }, 600);
      return;
    } else if (!emailPattern.test(email.trim())) {
      setError('Please enter valid email');
      setTimeout(() => {
        setError('');
      }, 600);
      return;
    } else {
      navigation.replace('Dashboard');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        enabled
        style={styles.keyContainer}
      >
        <View style={styles.fieldsContainer}>
          <Text style={styles.welcomeText}>
            Welcome to Kidz Play! Please Login
          </Text>
          <View style={{ marginTop: 3, marginBottom: 10 }}>
            <Text style={styles.textUpper}>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                autoComplete="email"
                style={styles.textStylePro}
                onChangeText={(text: any) => {
                  setEmail(text);
                }}
                value={email}
                placeholder={'Enter Email'}
              />
            </View>
            <Text style={styles.errorTexts}>{error}</Text>
          </View>
          <View style={{ marginBottom: 14 }}>
            <TouchableOpacity style={styles.sendBtn}>
              <Text style={styles.btnText} onPress={loginPress}>
                <>Login</>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0d283f',
    justifyContent: 'center',
  },
  keyContainer: {
    backgroundColor: 'transparent',
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000000',
  },

  inputContainer: {
    borderColor: '#000',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 17,
    color: '#0f3f5a',
  },

  textStylePro: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 10,
    paddingTop: 10,
    color: '#000',
    width: '85%',
  },
  fieldsContainer: {
    backgroundColor: '#f5f6fa',
    paddingTop: 10,
    borderRadius: 10,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 10,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 0,
  },
  textUpper: {
    textTransform: 'uppercase',
    marginLeft: 14,
    color: '#3a3d3d',
    marginBottom: 10,
  },
  sendBtn: {
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0d283f',
    width: '40%',
    padding: 15,
    marginTop: 8,
    marginLeft: 2,
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 1,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  errorText: {
    color: '#d12b39',
    marginLeft: 14,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  errorTexts: {
    color: '#d12b39',
    marginLeft: 14,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 2,
  },
  successText: {
    color: '#09ba36',
    marginLeft: 14,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
});
