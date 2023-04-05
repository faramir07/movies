import React from "react";
import { useRoute } from "@react-navigation/native";
import { BASE_URL_IMG } from "../../../App.jsx";
import IconI from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export const DetailMovie = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { img, title, overview, vote_average, release_date, popularity } =
    route.params;

  const image = { uri: BASE_URL_IMG + `${img}` };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonGoBack}
        onPress={() => navigation.goBack()}
      >
        <IconI
          name="md-arrow-back"
          size={30}
          color="#fff"
          style={styles.icon}
        />
      </TouchableOpacity>
      <ImageBackground
        resizeMode="stretch"
        source={image}
        style={styles.containerHeader}
      ></ImageBackground>
      <View style={styles.containerData}>
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.containerTextData}>
        <Text style={styles.textData}>Vote: {vote_average}</Text>
        <View style={styles.separadorData}></View>
        <Text style={styles.textData}>Date: {release_date}</Text>
        <View style={styles.separadorData}></View>
        <Text style={styles.textData}>Popularity: {popularity}</Text>
      </View>
      <View style={styles.separador}></View>
      <View style={styles.containersubTitle}>
        <Text style={styles.subTitle}>Story line</Text>
      </View>
      <View style={styles.containerOverview}>
        <Text style={styles.overview}>{overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1F1C2C",
    marginTop: StatusBar.currentHeight || 0,
  },
  buttonGoBack: {
    position: "absolute",
    top: 0,
    left: 20,
  },
  icon: {
    margin: 5,
  },
  containerHeader: {
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 30,
    marginTop: 50,
    width: 330,
    height: 200,
  },
  containerData: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
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
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    alignSelf: "flex-end",
  },
  containersubTitle: {
    alignSelf: "flex-start",
    marginStart: 20,
    marginTop: 10
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
    marginBottom: 30,
  },
  overview: {
    color: "#A5A5A5",
    textAlign: "justify",
  },
  containerTextData: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  separadorData: {
    width: 1,
    height: 15,
    backgroundColor: "#4F4F4F",
  },
  textData: {
    color: "#A5A5A5",
    textAlign: "justify",
    margin: 5
  },
  separador: {
    backgroundColor: "#4F4F4F",
    width: "90%",
    height: 1,
    marginTop: -10,
    marginBottom: 10,
  },
  separador: {
    backgroundColor: "#4F4F4F",
    width: "90%",
    height: 1,
    marginTop: -10,
    marginBottom: 10,
  },
  subTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  containerOverview: {
    width: "90%",
    margin: 10,
    marginBottom: 30,
  },
  overview: {
    color: "#A5A5A5",
    textAlign: "justify",
  },
});
