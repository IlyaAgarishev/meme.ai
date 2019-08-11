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

const Meme = props => {
  const { uri } = props;
  const leftIcons = [
    require("../../img/twitter.png"),
    require("../../img/instagram.png"),
    require("../../img/facebook.png"),
    require("../../img/reddit.png")
  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.memeImg} />
      <View style={styles.shareButtons}>
        <View style={styles.leftButtons}>
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
        <View style={styles.rightButtons}>
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  memeImg: {
    width: "100%",
    height: 300,
    borderRadius: 10
  },
  shareButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  leftButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  rightButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
});

export default Meme;
