import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, Alert,
} from 'react-native';
import Header from 'src/component/Header';
import styles from './styles';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log('this.props', this.props.navigation.state.params);
  }

  render() {
    return (
      <View>
        <Header title="SUNIL" />
      </View>
    );
  }
}
