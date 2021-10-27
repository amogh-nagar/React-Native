import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [coursegoals, setcoursegoals] = useState([]);
  const [isaddmode, setisaddmode] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const deletehandler = (goalId) => {
    setcoursegoals((prevgoals) => {
      return prevgoals.filter((goal) => goal.key !== goalId);
    });
  };

  const togglehandler = () => {
    setisaddmode((prevstate) => !prevstate);
  };

  const addGoalHandler = () => {
    setcoursegoals((prevstate) => [
      ...prevstate,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
    setisaddmode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={togglehandler} />
      <Modal visible={isaddmode} animationType="slide">
        <View style={styles.inputContainer}>
          <GoalInput
            enteredGoal={enteredGoal}
            goalInputHandler={goalInputHandler}
            addGoalHandler={addGoalHandler}
            toggler={togglehandler}
          />
        </View>
      </Modal>
      <FlatList
        // keyExtractor={item,index=>item.ukey}
        data={coursegoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deletehandler}
            itemData={itemData}
            id={itemData.item.key}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
