import React from "react";
import { Image, View, StyleSheet, Text, Button } from "react-native";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game is Over!</Text>
      <View style={styles.imgcont}>
        <Image
          style={styles.image}
          resizeMode="cover"
          //   fadeDuration={5000}
          source={require("../assets/success.png")}
          //   source={{
          //     uri: "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          //   }}
        />
      </View>
      <View style={styles.resultcnt}>
        <Text style={styles.resulttxt}>
          Your phone needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
          rounds to guess the number
          <Text style={styles.highlight}>{props.userchoice}</Text>
        </Text>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
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
  resulttxt: {
    textAlign: "center",
    fontSize: 20,
  },
  resultcnt: {
    width: "80%",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "open-bold",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-bold",
  },
});
export default GameOverScreen;
