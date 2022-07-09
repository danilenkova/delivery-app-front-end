import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

const getShops = createAsyncThunk(
  "shops/fetchShops",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/shops");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const shopsOperations = {
  getShops,
};
