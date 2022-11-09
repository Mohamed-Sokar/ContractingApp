import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutUsScreen, ContactUsScreen, HomeScreen } from "../screens/index";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const Tab = createBottomTabNavigator();

export default function HomeTap() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "الرئيسية") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "من نحن") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "تواصل معنا") {
            iconName = focused ? "call" : "call-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        headerShown: false,
        // tabBarStyle: styles.tabBarStyle,
      })}
    >
      <Tab.Screen name="الرئيسية" component={HomeScreen} />
      <Tab.Screen name="من نحن" component={AboutUsScreen} />
      <Tab.Screen name="تواصل معنا" component={ContactUsScreen} />
    </Tab.Navigator>
  );
}
