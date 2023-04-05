import { View, StyleSheet, Text, StatusBar } from "react-native";
import React from "react";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Soy Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1C2C",
    marginTop: StatusBar.currentHeight || 0,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    margin: 15,
  },
});
