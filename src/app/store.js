import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./slice/CategorySlice";

const store = configureStore({
  reducer: {
    [categorySlice.reducerPath]: categorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categorySlice.middleware),
  devTools: true,
});

export default store;
