import { toggleReducer } from "../Reducers/DegreesReducers";
import { createStore } from "redux";

export const store = createStore(toggleReducer);