import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "../slices/bookMarkSlices";

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
  },
});

export default store;
