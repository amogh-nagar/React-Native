import React, { useState, useRef, useEffect } from "react";
import { Alert, Button, View, Text, StyleSheet } from "react-native";

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

  const currentlow = useRef(1);
  const currenthigh = useRef(100);
  const [rounds, setrounds] = useState(0);

  useEffect(() => {
    if (currentguess === props.userchoice) {
      props.onGameOver(rounds);
    }
  }, [currentguess, props.userchoice, props.onGameOver]);

  const nextguesshandler = (direction) => {
    if (
      (direction === "lower" && currentguess < props.userchoice) ||
      (direction === "greater" && currentguess > props.userchoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      currenthigh.current = currentguess;
    } else {
      currentlow.current = currentguess;
    }
    const nextnumber = genereaterandombetween(
      currentlow.current,
      currenthigh.current,
      currentguess
    );
    setcurrentguess(nextnumber);
    setrounds((prevstate) => prevstate + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentguess}</NumberContainer>
      <Card style={styles.btncnt}>
        <Button onPress={nextguesshandler.bind(null, "lower")} title="LOWER" />
        <Button
          onPress={nextguesshandler.bind(null, "greater")}
          title="GREATER"
        />
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
