import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={props.buttonTextStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
}
export default Button;
