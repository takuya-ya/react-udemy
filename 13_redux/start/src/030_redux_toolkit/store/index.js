import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./modules/counter"

const reducers = combineReducers({
  counter: reducer,
});

export default configureStore({
  reducers: {
    
  }
});
