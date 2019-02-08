import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from "react-native";
import styles from './styles';
import Button from 'src/component/Button'

export default class Dashboard extends Component {
  static navigationOptions = {
    header: null
  }

  async logInFb() {
    try {
      const {
        type,
        token
      } = await Expo.Facebook.logInWithReadPermissionsAsync('804603689938210', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        console.log("response", response);
        console.log("response.json()", response.json());

      } else {
        // type === 'cancel'
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
