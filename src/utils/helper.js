import { NavigationActions } from 'react-navigation';

module.exports = {
  // resetNavigation to zero index
  resetNavigation(pointer, navigation, parameter = null) {
    const _this = pointer;
    _this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: navigation, params: parameter })],
    }));
  },

};
