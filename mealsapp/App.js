import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Fonts from "expo-font";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchfonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontload, setfontload] = useState(false);
  if (!fontload) {
    return (
      <AppLoading
        startAsync={fetchfonts}
        onFinish={() => {
          setfontload(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
