import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: "center" }}
        source={require("../../../assets/images/onBordingImage2.png")}
      />
      <Text style={styles.mainText}>من نحن</Text>
      <View style={styles.wrapperText}>
        <Text style={styles.text}>
          نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
          الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
          والنجارة واعمال السيراميك والرخام والواجهات والدهانات.
        </Text>
        <Text style={styles.text}>
          نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات
          والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من
          الوحدات وتركيب كافة الخدمات واعمال التشطيبات الكاملة.
        </Text>
        <Text style={styles.text}>
          نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة
          والاشكال العصرية.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    paddingVertical: 50,
  },
  mainText: {
    fontSize: 29,
    lineHeight: 35,
    fontWeight: "bold",
    // fontFamily: Fonts.SemiBold,
    color: Colors.gray,
    marginTop: 25,
    // marginBottom: 10,
  },
  wrapperText: {
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    // fontFamily: Fonts.Regular,
    color: Colors.darkGray,
    marginTop: 24,
  },
});
