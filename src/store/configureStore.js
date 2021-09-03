import { configureStore } from "@reduxjs/toolkit";
import busDetailReducer from './bus-detail-slice';

export const store = configureStore({
    reducer: {
      busDetail: busDetailReducer
    }
});