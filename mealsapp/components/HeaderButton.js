import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";
import colors from "../constants/colors";
import { Platform } from "react-native";
const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primarycolor}
    />
  );
};

export default CustomHeaderButton;
