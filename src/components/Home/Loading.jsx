import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
export const Loadin = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    width: "90%",
    backgroundColor: "#CF0000",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
    height: 100,
  },
});