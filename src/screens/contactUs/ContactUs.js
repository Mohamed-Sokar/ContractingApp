import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../../../components/Header/Header";
import Colors from "../../utils/Colors";

export default function ContactUs() {
  return (
    <View style={styles.container}>
      <Header title="تواصل معنا" />
      <Image
        source={require("../../../assets/images/scan.png")}
        style={styles.image}
      />
      <View>
        <Text style={styles.boldText}>تواصل معنا على:</Text>
        <Text style={styles.text}>infa@afaa8.com</Text>
        <Text style={styles.text}>0096652709005</Text>
        <Text style={[styles.text, { width: 250 }]}>
          العنوان: المملكة العربية السعودية
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 50,
  },
  boldText: {
    marginHorizontal: 60,
    marginBottom: 10,
    fontSize: 22,
    lineHeight: 37,
    fontWeight: "bold",
    // fontFamily: Fonts.bold,
    // alignSelf: "center",
  },
  text: {
    marginHorizontal: 60,
    fontSize: 22,
    lineHeight: 37,
    // width:200
    // fontFamily: Fonts.Regular,
    alignSelf: "flex-end",
  },
});
