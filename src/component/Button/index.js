import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={props.style}>
    <Text style={props.buttonTextStyle}>{props.text}</Text>
  </TouchableOpacity>
);

Button.propType = {
  text: PropTypes.string.isRequired,
  buttonTextStyle: PropTypes.object,
  style: PropTypes.style,
  onPress: PropTypes.func,
};

export default Button;
