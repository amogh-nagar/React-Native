import React from "react";
import {
  FlatList,
  Button,
  View,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { CATEGORIES } from "../data/dummydata";

const Categories = (props) => {
  let Touchablecmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }

  const rendergriditem = (itemdata) => {
    return (
      <View style={styles.griditem}>
        
        <Touchablecmp
          onPress={() => {
            props.navigation.navigate({
              routeName: "CategoryMeals",
              params: {
                categoryid: itemdata.item.id,
              },
            });
          }}
          style={{ flex: 1 }}
        >
          <View
            style={{
              ...styles.container,
              ...{ backgroundColor: itemdata.item.color },
            }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {itemdata.item.title}
            </Text>
          </View>
        </Touchablecmp>
      </View>
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
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  griditem: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow:'hidden'
  },
  title: {
    fontFamily: "open-bold",
    fontSize: 22,
    textAlign: "right",
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
