import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
const Categories = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories</Text>
      <Button
        title="Go to meals!"
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
          });
        //   props.navigation.replace({
        //     routeName: "CategoryMeals",
        //   });
          //   props.navigation.push("CategoryMeals");
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
export default Categories;
