import { createAction, createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'busDetail',
    initialState: [],
    reducers: {
      clearBusDetail: state => [],
      addBusDetail: (state, action) => [...state, action.payload]
    },
    actions: {
      addBusDetail: (payload) => ({type: 'busDetail/addbusDetail', payload}),
    }
}

const busDetailSlice = createSlice(options);

export const selectbusDetail = state => state.busDetail;

export const { addBusDetail } = busDetailSlice.actions;
export default busDetailSlice.reducer;