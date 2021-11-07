import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetail from "../screens/MealDetail";
import colors from "../constants/colors";

const Mealsnavigator = createStackNavigator(
  {
    Categories: {
      screen: Categories,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: {
      screen: MealDetail,
    },
  },
  {
    //   initialRouteName:'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primarycolor,
      },
      headerTintColor: "white",
      //   headerTitle:'Hello'//This will be overridden
    },
  }
);

export default createAppContainer(Mealsnavigator);
