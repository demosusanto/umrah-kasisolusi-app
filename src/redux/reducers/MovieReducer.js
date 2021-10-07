import { CONSTANT } from "../../helpers";

const defaultState = {
  movies: [
    {
      Title: "Captain Marvel",
      Year: "2019",
      imdbID: "tt4154664",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
    },
  ],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONSTANT.KEY_MOVIES_GET_ALL:
      return Object.assign({}, state, {
        movies: action.movies,
      });
    default:
      return state;
  }
}
