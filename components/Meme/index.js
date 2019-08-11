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

const Meme = props => {
  const { uri } = props;
  const leftIcons = [
    require("../../img/twitter.png"),
    require("../../img/instagram.png"),
    require("../../img/facebook.png"),
    require("../../img/reddit.png")
  ];

  return (
    <View style={{ marginBottom: 30 }}>
      <Image
        source={{ uri: uri }}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 10
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          {leftIcons.map((el, i) => {
            return (
              <Image
                source={el}
                style={{ width: 27, height: 27, marginRight: 7 }}
                key={i}
              />
            );
          })}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <Image
            source={require("../../img/share.png")}
            style={{ width: 24, height: 25, marginRight: 20 }}
          />
          <Image
            source={require("../../img/download.png")}
            style={{ width: 24, height: 32 }}
          />
        </View>
      </View>
    </View>
  );
};
export default Meme;
