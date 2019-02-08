import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from "./redux/configureStore";
import DashboardScreen from './containers/Dashboard';
import LoginScreen from './containers/Login';

console.disableYellowBox = true;

const AppNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen }
  },
  {
    Dashboard: { screen: DashboardScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}