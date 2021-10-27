import { TextInput, Button, StyleSheet } from "react-native";
import React from "react";
const GoalInput = (props) => {
  return (
    <>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
      />
      <Button title="ADD" onPress={props.addGoalHandler} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default GoalInput;
