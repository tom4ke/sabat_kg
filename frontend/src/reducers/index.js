import { combineReducers } from "redux";
import listings from "./listings";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  errors,
  messages,
  auth,
  listings,
});
