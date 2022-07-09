import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (order, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/orders/add", order);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const ordersOperations = {
  addOrder,
};
