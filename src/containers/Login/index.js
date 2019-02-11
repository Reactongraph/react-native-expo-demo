import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Button from 'src/component/Button';
import * as Helper from 'src/utils/helper';
import styles from './styles';

export default class Login extends Component {
  async logInFb() {
    try {
      const {
        type,
        token,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('804603689938210', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        const userName = (await response.json()).name;
        AsyncStorage.setItem('loginData', userName);
        Helper.resetNavigation(this, 'Dashboard', null);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.logInFb()}
          style={styles.buttonWrapper}
          text="Login with facebook"
          buttonTextStyle={styles.buttonTextStyle}
        />
      </View>
    );
  }
}
