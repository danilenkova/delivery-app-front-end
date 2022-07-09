import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { shopsReducer } from "./shops";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";
import { ordersReducer } from "./orders";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const cartPersistConfig = {
  key: "cart",
  storage,
};

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    products: productsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    orders: ordersReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
