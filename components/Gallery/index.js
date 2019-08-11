import React, { useState, useRef } from "react";
import {
  Alert,
  Button,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import CameraButton from "../CameraButton";
import Meme from "../Meme";

class Gallery extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate, state } = this.props.navigation;
    const { uri } = state.params;

    // const uri =
    //   "file:///data/user/0/com.meme_ai/cache/Camera/c4812e50-72ea-40c6-95c6-5af7ba505365.jpg";

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20
        }}
      >
        {uri && (
          <ScrollView style={{ width: "100%", height: 200, flex: 1 }}>
            <Meme uri={uri} />
            <Meme uri={uri} />
            <Meme uri={uri} />
            <Meme uri={uri} />
            <Meme uri={uri} />
            <Meme uri={uri} />
          </ScrollView>
        )}
      </View>
    );
  }
}

export default Gallery;
