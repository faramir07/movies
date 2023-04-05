import axios from "axios";
import { BASE_URL_API, API_KEY } from "../../../App"

export const allMoviesPopular = () => {
  return async function (dispatch) {
    const config = {
      method: "get",
      url: `${BASE_URL_API}/movie/popular?api_key=${API_KEY}`,
      headers: {},
    };

    try {
      let allMoviesPopular = await axios(config);
      return dispatch({
        type: "allMovies",
        payload: allMoviesPopular.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
