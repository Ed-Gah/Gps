import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import InfoFlatList from "../components/InfoFlatList";
import homeScreenFlatList from "../data/homeScreenFlatList";

const HomeScreen = (props) => {
  console.log("flat list", homeScreenFlatList);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={homeScreenFlatList}
          renderItem={({ item }) => <InfoFlatList item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d7d7d9",
  },
});
export default HomeScreen;
