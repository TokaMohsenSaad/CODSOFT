import { combineReducers } from "redux";
import addItems from "./addItem";

const rootReducers = combineReducers({
  addItem: addItems, // Ensure the key matches what you're accessing in useSelector
});

export default rootReducers;
