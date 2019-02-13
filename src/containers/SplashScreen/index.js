import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import * as Helper from 'src/utils/helper';

export default class SplashScreen extends Component {
  // Verify user is already logged in or not. And navigate accordingly.
  componentDidMount() {
    AsyncStorage.getItem('loginData').then((value) => {
      if (value) {
        Helper.resetNavigation(this, 'Dashboard', null);
      } else {
        Helper.resetNavigation(this, 'Login', null);
      }
    });
  }

  render() {
    return (
      <View />
    );
  }
}
