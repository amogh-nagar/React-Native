import React from "react";
import { Image, View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game is Over!</Text>
      <View style={styles.imgcont}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/success.png")}
        />
      </View>
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
  imgcont: {
    margin: 30,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "open-bold",
  },
});
export default GameOverScreen;
