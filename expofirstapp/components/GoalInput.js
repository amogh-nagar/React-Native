import { View, TextInput, Button, StyleSheet } from "react-native";
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
      <View style={styles.btns}>
        <View style={styles.button}>
          <Button title="ADD" onPress={props.addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={props.toggler} />
        </View>
      </View>
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
    marginBottom: 10,
  },
  btns: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
  button:{
      width:"40%"
  }
});

export default GoalInput;
