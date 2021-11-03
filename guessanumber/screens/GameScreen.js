import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
const genereaterandombetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndnum = Math.floor(Math.random() * (max - min)) + min;
  if (rndnum === exclude) {
    return genereaterandombetween(min, max, exclude);
  }
  return rndnum;
};

const GameScreen = (props) => {
  const [currentguess, setcurrentguess] = useState(
    genereaterandombetween(1, 100, props.userchoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentguess}</NumberContainer>
      <Card style={styles.btncnt}>
        <Button title="LOWER" />
        <Button title="GREATER" />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btncnt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
export default GameScreen;
