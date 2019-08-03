import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

const CameraButton = props => {
  const { setCameraActive } = props;

  return (
    <TouchableOpacity
      style={{ backgroundColor: "#FFA649", padding: 25, borderRadius: 200 }}
      // onPress={() => {
      //   fetch("https://picsum.photos/v2/list")
      //     .then(response => response.json())
      //     .then(data => {
      //       return (urlsArray = data.map((el, i) => {
      //         return el.download_url;
      //       }));
      //     })
      //     .then(urlsData => {
      //       setUrls(urlsData);
      //     });
      // }}
      onPress={() => {
        setCameraActive(true);
      }}
    >
      <Image
        source={require("../../img/camera.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export default CameraButton;
