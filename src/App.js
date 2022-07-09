import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./components/Loader";
import { shopsOperations, shopsSelectors } from "./redux/shops";
import { productsOperations } from "./redux/products";

import Container from "./components/Container";
import AppBar from "./components/AppBar";

const ShopView = lazy(() =>
  import("./views/ShopView" /*webpackChunkName: "shop-page" */)
);

const CartView = lazy(() =>
  import("./views/CartView" /*webpackChunkName: "cart-page" */)
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopsOperations.getShops());
    dispatch(productsOperations.getProducts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ShopView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
