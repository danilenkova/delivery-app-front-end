import { createSlice } from "@reduxjs/toolkit";
import { shopsOperations } from "./shops-operations";

const initialState = {
  items: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  extraReducers: {
    [shopsOperations.getShops.fulfilled](state, { payload }) {
      state.items = payload.data.result;
    },
  },
});

export default shopsSlice.reducer;
