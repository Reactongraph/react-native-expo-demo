import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Button from '../Button';

const Header = props => (
  <View style={props.wrapperStyle}>
    <Text style={props.titleTextStyle}>{props.title}</Text>
    <Button
      onPress={props.onPress}
      text={props.rightText}
      buttonTextStyle={props.titleTextStyle}
    />
  </View>
);

Header.propType = {
  wrapperStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  title: PropTypes.string,
  rightText: PropTypes.rightText,
  onPress: PropTypes.func,
};

export default Header;
