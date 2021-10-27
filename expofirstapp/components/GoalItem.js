import { View, Text, StyleSheet } from "react-native";
import React from "react";
const GoalItem = ({itemData}) => {
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
