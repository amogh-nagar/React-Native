import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Number was: {props.userchoice}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default GameOverScreen;
