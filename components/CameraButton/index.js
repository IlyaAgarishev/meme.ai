import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

const CameraButton = props => {
  const { navigate } = props;
  return (
    <TouchableOpacity
      style={styles.cameraButton}
      onPress={() => navigate("Camera")}
    >
      <Image
        source={require("../../img/camera.png")}
        style={styles.cameraImg}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraButton: { backgroundColor: "#FFA649", padding: 25, borderRadius: 200 },
  cameraImg: { width: 30, height: 30 }
});

export default CameraButton;
