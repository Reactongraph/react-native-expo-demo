import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './redux/configureStore';
import DashboardScreen from './containers/Dashboard';
import LoginScreen from './containers/Login';
import SplashScreen from './containers/SplashScreen';

console.disableYellowBox = true;

const AppNavigator = StackNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    Login: { screen: LoginScreen },
    Splash: { screen: SplashScreen },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
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
