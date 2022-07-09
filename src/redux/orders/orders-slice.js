import { createSlice } from "@reduxjs/toolkit";
import { ordersOperations } from "./orders-operations";

const initialState = {
  items: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: {
    [ordersOperations.addOrder.fulfilled](state, { payload }) {
      state.items = payload.data.order;
    },
  },
});

export default ordersSlice.reducer;
