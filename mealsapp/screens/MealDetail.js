import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
const MealDetail = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetail</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetail;
