import { combineReducers } from "redux";
import auth from "./AuthReducer";
import menu from "./MenuReducer";
import loader from "./LoaderReducer";
import alert from "./AlertReducer";
import umrahReducer from "./UmrahReducer";
import language from "./LanguageReducer";

const rootReducer = combineReducers({
  auth,
  menu,
  loader,
  alert,
  umrahReducer,
  language,
});

export default rootReducer;
