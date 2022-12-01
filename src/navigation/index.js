import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../pages/SignUpScreen";
import HomeScreen from "../pages/HomeScreen";
import ConfirmEmailScreen from "../pages/ConfirmEmail";
import ForgotPasswordScreen from "../pages/ForgotPasswordScreen";
import ResetPasswordScreen from "../pages/ResetPasswordScreen";

/*
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={HomeScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
*/