import { View, StyleSheet, Text, StatusBar } from "react-native";
import React from "react";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Hi, Hoang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1C2C",
    marginTop: StatusBar.currentHeight || 0,
  },
  textTitle:{
    position: "absolute",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    width: 106,
    height: 30,
    margin: 15
  }
});
