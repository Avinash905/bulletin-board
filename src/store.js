import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducer/slice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
