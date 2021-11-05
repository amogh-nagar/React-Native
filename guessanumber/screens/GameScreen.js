import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/MainButton";
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

const renderlistitems = (value, index) => (
  <View style={styles.listitem} key={index}>
    <Text style={{ fontFamily: "open-sans" }}># {index}</Text>
    <Text style={{ fontFamily: "open-sans" }}>{value}</Text>
  </View>
);

const GameScreen = (props) => {
  const intialgues = genereaterandombetween(1, 100, props.userchoice);
  const [currentguess, setcurrentguess] = useState(intialgues);

  const currentlow = useRef(1);
  const currenthigh = useRef(100);
  const [pastguesses, setpastguesses] = useState([intialgues]);

  useEffect(() => {
    if (currentguess === props.userchoice) {
      props.onGameOver(pastguesses.length);
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
    setpastguesses((prev) => [nextnumber, ...prev]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentguess}</NumberContainer>
      <Card style={styles.btncnt}>
        <MainButton onPress={nextguesshandler.bind(null, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextguesshandler.bind(null, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listcontainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastguesses.map((guess, index) =>
            renderlistitems(guess, pastguesses.length - index)
          )}
        </ScrollView>
      </View>
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
    width: 400,
    maxWidth: "90%",
  },
  listitem: {
    borderColor: "#ccc",
    padding: 15,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  listcontainer: {
    width: "80%",
    flex: 1,
  },
  list: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
});

export default GameScreen;
