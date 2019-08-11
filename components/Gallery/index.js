import React, { useState, useRef } from "react";
import {
  Alert,
  Button,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
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
      <View style={styles.container}>
        {uri && (
          <ScrollView style={styles.scrollView}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: { width: "100%", height: 200, flex: 1, padding: 20 }
});

export default Gallery;
