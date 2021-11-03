import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [selectednumber, setselectednumber] = useState();

  const startgamehandler = (selectedn) => {
    setselectednumber(selectedn);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {!selectednumber && <StartGameScreen onStart={startgamehandler} />}
      {selectednumber && <GameScreen userchoice={selectednumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
