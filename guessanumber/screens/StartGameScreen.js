import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card styles={styles.inputcontainer}>
        <Text>Select a Number</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          // keyboardType="numeric"
          maxLength={2}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Reset" onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.btn}>
            <Button title="Confirm" onPress={() => {}} color={colors.primary} />
          </View>
        </View>
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
  inputcontainer: { width: 300, maxWidth: "80%", alignItems: "center" },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
