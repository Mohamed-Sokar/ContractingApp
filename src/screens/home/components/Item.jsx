import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";
import React from "react";

const Item = ({ title1, title2, icon }) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.icon}>
      <Image source={icon} />
    </View>
    <View>
      <Text style={styles.title}>{title1}</Text>
      <Text style={styles.title}>{title2}</Text>
    </View>
  </TouchableOpacity>
);

export default Item;
const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    width: 165,
    height: 136,
    margin: 7.5,
    borderRadius: 5,
    justifyContent: "space-around",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    width: 49,
    height: 49,
    borderRadius: 49,
    borderWidth: 1,
    borderColor: Colors.secondary,
    alignSelf: "center",
    marginTop: 12.5,
    marginBottom: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    // fontFamily: Fonts.SemiBold,
    color: Colors.black,
    marginHorizontal: 5,
    textAlign: "center",
  },
});
