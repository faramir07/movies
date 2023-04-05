import { View, ImageBackground, Text, StyleSheet } from "react-native";
import React from "react";
import { BASE_URL_IMG } from "../../../App";

export const HeaderMovieMaxVote = ({ img, title, overview }) => {
  const image = { uri: BASE_URL_IMG + `${img}` };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        source={image}
        style={styles.containerHeader}
      >
        <View style={styles.containerData}>
          <View style={styles.containerText}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.subTitle}>Story line</Text>
        <View style={styles.containerOverview}>
          <Text style={styles.overview}>{overview}</Text>
        </View>
      </View>
      <View style={styles.separador}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerHeader: {
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 30,
  },
  containerData: {
    width: 330,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerText: {
    margin: 0,
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 18,
    textAlign: "center",
    margin: 5,
    alignSelf: "flex-end",
  },
  subTitle: {
    color: "#fff",
    margin: 10,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  containerOverview: {
    width: "90%",
    margin: 5,
    marginBottom: 30
  },
  overview: {
    color: "#A5A5A5",
    textAlign: "justify"
  },
  separador: {
    backgroundColor: "#4F4F4F",
    width: "90%",
    height: 1,
    marginTop: -10,
    marginBottom: 10
  }
});
