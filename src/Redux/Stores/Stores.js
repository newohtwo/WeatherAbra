import { combineReducers } from "../../../node_modules/redux/dist/redux";
import { darkModeReducer } from "../Reducers/DarkModeReducer";
import { toggleReducer } from "../Reducers/DegreesReducers";
import { createStore } from "redux";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  toggle: toggleReducer,
});

export const store = createStore(rootReducer);