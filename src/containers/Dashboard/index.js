import React, { Component } from 'react';
import { View, Image, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import Swiper from "react-native-swiper";
import Header from 'src/component/Header';
import styles from './styles';
import * as Helper from "src/utils/helper";
import { IMAGEDATA } from 'src/utils/constants';

class Dashboard extends Component {
  state = {
    userName: ""
  };
  componentDidMount() {
    this.props.dispatch({
      type: "GET_IMAGES"
    });
    // Get userName from local storage
    AsyncStorage.getItem("loginData").then(value => {
      this.setState({ userName: value });
    });
  }

// Logout and clear userData
  handleLogout = () => {
    AsyncStorage.setItem("loginData", "");
    Helper.resetNavigation(this, "Login", null);
  };


  showSwiper = () => {
    // Called dummy free api. If api author stopped free service then get data from constants
    const { getImageData } = this.props;
    const IMAGE_POST_DATA = getImageData.length ? getImageData : IMAGEDATA;
    return (
      <Swiper style={styles.wrapper} showsButtons>
        {IMAGE_POST_DATA.map((image, index) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: image.src.original }}
                style={styles.imageStyle}
              />
            </View>
          );
        })}
      </Swiper>
    );
  }

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
        <View style={styles.imageDataView}>{this.showSwiper()}</View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  getImageData: state.getImageData.getImages,
});


export default connect(mapStateToProps)(Dashboard);
