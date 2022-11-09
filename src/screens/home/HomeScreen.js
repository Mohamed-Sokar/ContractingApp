import { View, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import React from "react";
import Item from "./components/Item";
import Header from "../../../components/Header/Header";

const DATA = [
  {
    id: 1,
    title1: "التعريف",
    title2: "بقطاع المقاولات",
    icon: require("../../../assets/images/icon1.png"),
  },
  {
    id: 2,
    title1: "متطلبات تأسيس",
    title2: "منشاة مقاولات",
    icon: require("../../../assets/images/icon2.png"),
  },
  {
    id: 3,
    title1: "تراخيص مزاولة",
    title2: "نشاط المقاولات",
    icon: require("../../../assets/images/icon3.png"),
  },
  {
    id: 4,
    title1: "قواعد وإجراءات",
    title2: "أساسية بشأن التعاقد",
    icon: require("../../../assets/images/icon4.png"),
  },
  {
    id: 5,
    title1: "الجهات",
    title2: "ذات العلاقة",
    icon: require("../../../assets/images/icon5.png"),
  },
  {
    id: 6,
    title1: "منصات الكترونية",
    title2: "في خدمة المقاول",
    icon: require("../../../assets/images/icon6.png"),
  },
  {
    id: 7,
    title1: "خطة عمل المشروعات",
    title2: "وتدفقاتها المالية",
    icon: require("../../../assets/images/icon7.png"),
  },
  {
    id: 8,
    title1: "آليات تسليم",
    title2: "مشاريع المقاولات",
    icon: require("../../../assets/images/icon8.png"),
  },
  {
    id: 9,
    title1: "أنظمة",
    title2: "عقود المقاولات",
    icon: require("../../../assets/images/icon9.png"),
  },
  {
    id: 10,
    title1: "علاقة المقاول مع",
    title2: "مكاتب إجراءات السلامة",
    icon: require("../../../assets/images/icon10.png"),
  },
  {
    id: 11,
    title1: "الجانب",
    title2: "الاجتماعي والوطني",
    icon: require("../../../assets/images/icon11.png"),
  },
  {
    id: 12,
    title1: "لجنة المقاولات: رسالتها",
    title2: "-أهدافها–إنجازاتها",
    icon: require("../../../assets/images/icon12.png"),
  },
];

const { width } = Dimensions.get("window");

const renderItem = ({ item }) => (
  <Item title1={item.title1} title2={item.title2} icon={item.icon} />
);

export default function Index() {
  return (
    <View>
      <Header title="مقاولات" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={<Text style={styles.indexText}>الفهرس</Text>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerFlatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  indexText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 8,
    width: width,
    paddingHorizontal: 22,
    alignSelf: "flex-end",
    color: "#000",
  },
  containerFlatList: {
    alignItems: "center",
    paddingBottom: 105,
    justifyContent: "center",
  },
});
