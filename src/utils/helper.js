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

  navigateToPage(self, page, params = null) {
    if (page === 'goBack' || page === '') {
      self.props.navigation.goBack(null);
    } else {
      self.props.navigation.navigate(page, { ...params });
    }
  },

};
