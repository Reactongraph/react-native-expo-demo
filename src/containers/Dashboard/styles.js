import { StyleSheet, Dimensions } from 'react-native';
import * as Common from '../../utils/common';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    width,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: -20,
    marginBottom: -25,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  footerIconView: {
    flexDirection: 'row',
  },
  postTitle: {
    fontWeight: Common.boldFontWeight,
    fontSize: Common.titleText,
    color: Common.darkBlack,
    fontFamily: Common.ROBOTO_CONDENSED_BOLD,
  },
  postDescription: {
    fontWeight: Common.boldFontRegular,
    fontSize: Common.titleDescription,
    color: Common.lightDarkColor,
    fontFamily: Common.ROBOTO_CONDENSED_BOLD,
  },
  iconStyle: {
    color: Common.darkBlack,
    fontSize: 30,
  },
});

module.exports = styles;
