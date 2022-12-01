import "react-native-gesture-handler";

import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/pages/HomeScreen";
import StatsSreen  from "./src/pages/StatsScreen";
import GamesScreen from "./src/pages/GamesScreen";
import SettingsScreen from "./src/pages/SettingsScreen";
import SignUpScreen from "./src/pages/SignUpScreen";
import ConfirmEmailScreen from "./src/pages/ConfirmEmail";
import ForgotPasswordScreen from "./src/pages/ForgotPasswordScreen";
import ResetPasswordScreen from "./src/pages/ResetPasswordScreen";
//import Navigation from "./src/navigation";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack () {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={HomeScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#7ad6d6',
        }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#c89ed0" },

        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="wrench"
                color={color}
                size={size}
              />
            ),
          }}
        />
         <Tab.Screen
          name="Games"
          component={GamesScreen}
          options={{
            tabBarLabel: "Games",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="controller-classic"
                color={color}
                size={size}
              />
            ),
          }}
        />
         <Tab.Screen
          name="LeaderBoard"
          component={StatsSreen}
          options={{
            tabBarLabel: "Leader Boards",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="crown"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
