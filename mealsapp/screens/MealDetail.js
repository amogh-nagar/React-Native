import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummydata";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetail = (props) => {
  const mealid = props.navigation.getParam("mealId");
  const selectedmeal = MEALS.find((meal) => meal.id === mealid);

  return (
    <View style={styles.screen}>
      <Text>{selectedmeal.title}</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetail.navigation = (navigationdata) => {
  const mealid = navigationdata.navigation.getParam("mealId");
  const selectedmeal = MEALS.find((meal) => meal.id === mealid);

  return {
    headerTitle: selectedmeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealDetail;
