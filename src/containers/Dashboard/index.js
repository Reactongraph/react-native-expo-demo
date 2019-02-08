import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import Header from 'src/component/Header';
import styles from './styles';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // console.log('this.props', this.props.navigation.state.params);
    this.props.dispatch({
      type: 'GET_IMAGES',
    });
  }

  render() {
    console.log('this.props.getImageData', this.props.getImageData);
    return (
      <View style={styles.container}>
        <Text>dshfdsjf</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getImageData: state.getImageData,
});

export default connect(mapStateToProps)(Dashboard);
