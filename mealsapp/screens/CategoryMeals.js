import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { HeaderTitle } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummydata";

const CategoryMeals = (props) => {
  const catid = props.navigation.getParam("categoryid");
  const category = CATEGORIES.find((c) => c.id === catid);
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals</Text>
      <Text>{category.title}</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          //   props.navigation.goBack()
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMeals.navigationOptions = (navigationdata) => {
  const catid = navigationdata.navigation.getParam("categoryid");
  const category = CATEGORIES.find((c) => c.id === catid);
  return {
    headerTitle: category.title,
    
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMeals;
