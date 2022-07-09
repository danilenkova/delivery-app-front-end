import { createAction } from "@reduxjs/toolkit";

export const addProductToCart = createAction("cart/AddProduct", (product) => ({
  payload: {
    ...product,
  },
}));

export const updateAmountInCart = createAction("cart/Increment", (product) => ({
  payload: {
    ...product,
  },
}));

export const setAmountInCart = createAction("cart/SetAmount", (product) => ({
  payload: {
    ...product,
  },
}));

export const deleteProductInCart = createAction("cart/DeleteProductInCart");

export const removeCart = createAction("cart/DeleteProductInCart");
