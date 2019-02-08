import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Header = props => (
  <View style={props.wrapperStyle}>
    <Text style={props.titleTextStyle}>{props.title}</Text>
  </View>
);

Header.propType = {
  wrapperStyle: PropTypes.object,
  titleTextStyle: PropTypes.object,
  title: PropTypes.string,
};

export default Header;
