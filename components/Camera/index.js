"use strict";
import React, { PureComponent } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RNCamera } from "react-native-camera";

class Camera extends PureComponent {
  static navigationOptions = {
    header: null
  };

  takePicture = async () => {
    const { navigate } = this.props.navigation;
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      navigate("Gallery", { uri: data.uri });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <TouchableOpacity
          onPress={this.takePicture.bind(this)}
          style={styles.capture}
        >
          <View style={styles.captureInner} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#003466",
    borderRadius: 100,
    alignSelf: "center",
    width: 80,
    height: 80,
    margin: 20,
    bottom: 0
  },
  captureInner: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#FFA649"
  }
});

export default Camera;
