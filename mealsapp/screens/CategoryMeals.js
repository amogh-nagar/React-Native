import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
const CategoryMeals = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button title="Go back" onPress={()=>{
        //   props.navigation.goBack()
          props.navigation.pop()
      }} />
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
export default CategoryMeals;
