import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "../screens";
import HomeTap from "./HomeTap";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const StartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        // options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen name="HomeTap" component={HomeTap} />
    </Stack.Navigator>
  );
};
export default StartStack;
