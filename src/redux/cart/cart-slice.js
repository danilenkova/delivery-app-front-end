import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addProductToCart,
  setAmountInCart,
  updateAmountInCart,
  deleteProductInCart,
  removeCart,
} from "./cart-actions";

const initialState = {
  items: [],
};

const items = createReducer(initialState.items, {
  [addProductToCart]: (state, { payload }) => [...state, payload],
  [updateAmountInCart]: (state, { payload }) => [
    ...state.map((item) =>
      item._id === payload._id
        ? { ...item, amount: item.amount + payload.amount }
        : item
    ),
  ],
  [setAmountInCart]: (state, { payload }) => [
    ...state.map((item) =>
      item._id === payload._id ? { ...item, amount: payload.amount } : item
    ),
  ],
  [deleteProductInCart]: (state, { payload }) => [
    ...state.filter(({ _id }) => _id !== payload),
  ],
  [removeCart]: () => initialState.items,
});

export default combineReducers({
  items,
});
