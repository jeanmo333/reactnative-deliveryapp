/** @format */

import React from "react";
import { ActivityIndicator } from "react-native";
import { MyColors } from "../theme/AppTheme";

const CustomLoadingButtom = () => {
  return <ActivityIndicator size='large' color={MyColors.background} />;
};

export default CustomLoadingButtom;
