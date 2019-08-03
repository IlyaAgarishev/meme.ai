import React, { useState } from "react";
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

const App = () => {
  const [cameraActive, setCameraActive] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {cameraActive ? (
        <RNCamera
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      ) : (
        <CameraButton setCameraActive={setCameraActive} />
      )}
    </View>
  );
};

export default App;
