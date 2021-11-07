import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetail from "../screens/MealDetail";

const Mealsnavigator = createStackNavigator({
  Categories: Categories,
  CategoryMeals: CategoryMeals,
  MealDetail: MealDetail,
});

export default createAppContainer(Mealsnavigator);
