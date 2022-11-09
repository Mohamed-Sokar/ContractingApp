import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../src/utils/Colors";

const { width } = Dimensions.get("screen");

export default function Header({ title }) {
  return (
    <View>
      <View style={styles.container} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
    borderRadius: width,
    backgroundColor: Colors.primary,
    transform: [{ scaleX: 2 }],
    marginTop: -width / 1.4,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    // fontFamily: Fonts.bold,
    color: Colors.white,
    position: "absolute",
    alignSelf: "center",
    bottom: 12,
  },
});
