import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
  Button,
  View,
} from "react-native";
import Dot from "./components/Dot";
import OnboardingItem from "./components/OnboardingItem";

const DATA = [
  {
    id: 1,
    imageUrl: require("../../../assets/images/onBordingImage1.png"),
  },
  {
    id: 2,
    imageUrl: require("../../../assets/images/onBordingImage2.png"),
  },
];

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScrollHandler = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };
  const renderItem = ({ item }) => <OnboardingItem imageUrl={item.imageUrl} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onScroll={onScrollHandler}
        horizontal
        pagingEnabled
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={DATA}
        renderItem={({ index }) => (
          <Dot index={index} activeIndex={activeIndex} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dotsFlatList}
      />
      <View style={styles.button}>
        <Button
          title="Go to the HomeTap"
          onPress={() => navigation.navigate("HomeTap")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  dotsFlatList: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
});

export default OnboardingScreen;
