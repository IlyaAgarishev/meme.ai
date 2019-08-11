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
import { RNCamera } from "react-native-camera";
import Camera from "../Camera";

class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CameraButton navigate={navigate} />
      </View>
    );
  }
}

export default App;
