import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

const CameraButton = props => {
  const { navigate } = props;
  return (
    <TouchableOpacity
      style={{ backgroundColor: "#FFA649", padding: 25, borderRadius: 200 }}
      onPress={() => navigate("Camera")}
    >
      <Image
        source={require("../../img/camera.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export default CameraButton;
