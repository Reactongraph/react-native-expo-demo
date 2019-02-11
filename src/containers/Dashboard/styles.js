import { StyleSheet } from 'react-native';
import * as Common from '../../utils/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperStyle: {
    backgroundColor: Common.redColor,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleTextStyle: {
    color: Common.whiteColor,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: Common.deviceHeight - 100,
    width: Common.deviceWidth - 20,
    marginTop: 10,
    marginLeft: 10,
  },
  imageDataView: {
    flex: 15,
  },
});

module.exports = styles;
