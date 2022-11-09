import { View, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

export default function OnboardingItem({ imageUrl }) {
  return (
    <View style={styles.item}>
      <Image source={imageUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
});
