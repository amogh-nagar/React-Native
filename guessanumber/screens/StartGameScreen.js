import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputcontainer}>
        <Text>Select a Number</Text> <TextInput />{" "}
        <View style={styles.buttoncontainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    // justifyContent:'flex-start'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputcontainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
