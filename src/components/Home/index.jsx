import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { allMoviesPopular } from "../../Redux/Actions/index.js";
import { HeaderMovieMaxVote } from "./HeaderMovieMaxVote.jsx";
import { useNavigation } from "@react-navigation/native";
import { Loadin } from "./Loading.jsx";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export const Home = () => {
  const dataMovie = useSelector((state) => state.allMovies);
  const navigation = useNavigation();

  const handleDetailsPress = ({
    img,
    title,
    overview,
    vote_average,
    release_date,
    popularity,
  }) => {
    navigation.navigate("DetailMovie", {
      img,
      title,
      overview,
      vote_average,
      release_date,
      popularity,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allMoviesPopular());
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textTitle}>Hi, Hoang</Text>
        {dataMovie ? (
          dataMovie.map((movie) => (
            <TouchableOpacity
              onPress={() =>
                handleDetailsPress({
                  img: movie.backdrop_path,
                  title: movie.title,
                  overview: movie.overview,
                  vote_average: movie.vote_average,
                  release_date: movie.release_date,
                  popularity: movie.popularity,
                })
              }
              key={movie.id}
            >
              <HeaderMovieMaxVote
                img={movie.backdrop_path}
                title={movie.original_title}
                overview={movie.overview}
              />
            </TouchableOpacity>
          ))
        ) : (
          <Loadin />
        )}
      </ScrollView>
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
    width: 106,
    height: 30,
    margin: 15,
  },
});
