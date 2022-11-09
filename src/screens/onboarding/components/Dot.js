import { View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../utils/Colors";

export default function Dot({ index, activeIndex }) {
  const customStyle =
    index === activeIndex ? styles.primaryBullet : styles.grayBullet;
  return <View style={[styles.mainDotContainer, customStyle]} />;
}

const styles = StyleSheet.create({
  mainDotContainer: {
    marginHorizontal: 2,
    borderRadius: 15 / 2,
    alignSelf: "center",
  },
  primaryBullet: {
    height: 15,
    width: 15,
    backgroundColor: Colors.primary,
  },
  grayBullet: {
    height: 10,
    width: 10,
    backgroundColor: Colors.secondary,
  },
});
