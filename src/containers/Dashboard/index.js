import React, { Component } from 'react';
import { View, FlatList, Image, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import Header from 'src/component/Header';
import styles from './styles';
import * as Helper from "src/utils/helper";

const ImageData = [
  { src: { original:'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg',},},
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },
  { src: { original: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg', }, },

];
class Dashboard extends Component {
  state = {
    userName: ""
  };
  componentDidMount() {
    this.props.dispatch({
      type: "GET_IMAGES"
    });

    AsyncStorage.getItem("loginData").then(value => {
      this.setState({ userName: value });
    });
  }

  _keyExtractor = (item, index) => item.id;

  handleLogout = () => {
    AsyncStorage.setItem("loginData", '');
    Helper.resetNavigation(this, 'Login', null);
  }

  _renderItem = ({ item }) => (
    <View>
      <Image source={{ uri: item.src.original }} style={styles.imageStyle} />
    </View>
  );

  render() {
    const { userName } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title={`Welcome ${userName}`}
          titleTextStyle={styles.titleTextStyle}
          wrapperStyle={styles.wrapperStyle}
          rightText="Logout"
          onPress={this.handleLogout}
        />
        <View style={styles.imageDataView}>
          <FlatList
            data={ImageData}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getImageData: state.getImageData,
});


export default connect(mapStateToProps)(Dashboard);
