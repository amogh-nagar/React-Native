import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { HeaderTitle } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummydata";

const CategoryMeals = (props) => {
  const catid = props.navigation.getParam("categoryid");
  const displaymeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catid) >= 0
  );

  const mealrender = (itemdata) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({});
        }}
        style={styles.mealitem}
      >
        <View>
          <View style={{ ...styles.mealrow, ...styles.mealheader }}>
            <ImageBackground
              source={{ uri: itemdata.item.imageUrl }}
              style={styles.bgimg}
            >
              <View style={styles.titlecnt}>
                <Text numberOfLines={1} style={styles.title}>
                  {itemdata.item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealrow, ...styles.mealrowdetail }}>
            <Text>{itemdata.item.duration}</Text>
            <Text>{itemdata.item.complexity.toUpperCase()}</Text>
            <Text>{itemdata.item.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displaymeals}
        renderItem={mealrender}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
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
  bgimg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealrow: {
    flexDirection: "row",
  },
  mealitem: {
    borderRadius: 10,
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealheader: {
    height: "85%",
  },
  mealrowdetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titlecnt: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    color: "white",
    fontFamily: "open-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default CategoryMeals;
