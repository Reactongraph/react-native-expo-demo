import { StyleSheet, Dimensions } from 'react-native';
import * as Common from '../../common/common';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#4267B2',
    padding: 10,
  },
  buttonTextStyle: {
    color: '#fff',
  }
});

module.exports = styles;
