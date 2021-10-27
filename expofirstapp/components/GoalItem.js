import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
const GoalItem = ({ itemData, onDelete,id }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(null,id)}>
      <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
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
