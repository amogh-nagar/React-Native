import React, { useState } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [coursegoals, setcoursegoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setcoursegoals((prevstate) => [
      ...prevstate,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput
          enteredGoal={enteredGoal}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
        />
      </View>
      <FlatList
        // keyExtractor={item,index=>item.ukey}
        data={coursegoals}
        renderItem={(itemData) => <GoalItem itemData={itemData} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
