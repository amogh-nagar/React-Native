import React from "react";
import {
  FlatList,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummydata";

const Categories = (props) => {
  const rendergriditem = (itemdata) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryid: itemdata.item.id,
            },
          });
        }}
        style={styles.griditem}
      >
        <Text>{itemdata.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={rendergriditem}
      keyExtractor={(item) => {
        return item.id;
      }}
    />
  );
};

Categories.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  griditem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default Categories;

{
  /* <View style={styles.screen}>
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
    </View> */
}
