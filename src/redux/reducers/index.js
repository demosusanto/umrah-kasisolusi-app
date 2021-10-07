import { combineReducers } from "redux";
import auth from "./AuthReducer";
import menu from "./MenuReducer";
import loader from "./LoaderReducer";
import alert from "./AlertReducer";
import movieReducer from "./MovieReducer";
import language from "./LanguageReducer";

const rootReducer = combineReducers({
  auth,
  menu,
  loader,
  alert,
  movieReducer,
  language,
});

export default rootReducer;
