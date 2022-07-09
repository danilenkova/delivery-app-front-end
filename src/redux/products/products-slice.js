import { createSlice } from "@reduxjs/toolkit";
import { productsOperations } from "./products-operations";

const initialState = {
  items: null,
};

const shopsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [productsOperations.getProducts.fulfilled](state, { payload }) {
      state.items = payload.data.result;
    },
  },
});

export default shopsSlice.reducer;
