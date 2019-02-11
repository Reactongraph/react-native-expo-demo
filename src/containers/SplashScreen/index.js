import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import * as Helper from 'src/utils/helper';

export default class SplashScreen extends Component {
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
