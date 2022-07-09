import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productsOperations = {
  getProducts,
};
