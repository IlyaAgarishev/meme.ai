/**
 * @format
 */
import React from "react";
import { AppRegistry, Button, View, Text } from "react-native";
import Start from "./components/Start";
import Camera from "./components/Camera";
import Gallery from "./components/Gallery";
import { name as appName } from "./app.json";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Start: { screen: Start },
  Gallery: { screen: Gallery },
  Camera: { screen: Camera }
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => App);
