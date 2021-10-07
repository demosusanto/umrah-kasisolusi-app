import { CONSTANT } from "../../helpers";
import { loader } from "./LoaderAction";
// import { MovieService } from "../../Services/MovieService";
import axios from "axios";
import { jsonToQueryString } from "../../helpers";

export const MovieAction = {
  fetchMovie,
};

function fetchMovie(params, successCallback) {
  return (dispatch) => {
    dispatch(loader(true));
    const url = "http://www.omdbapi.com";
    return axios.get(url + "?" + jsonToQueryString(params)).then((res) => {
      dispatch(loader(false));
      dispatch(setMovies(res.data));
      successCallback();
    });
  };
}

function setMovies(data) {
  return {
    type: CONSTANT.KEY_MOVIES_GET_ALL,
    movies: data,
  };
}
