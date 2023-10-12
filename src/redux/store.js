import { configureStore } from '@reduxjs/toolkit'
import ApiReducer from "./apiSlice";
export const store = configureStore({
    reducer: {
      api : ApiReducer,
  },
})