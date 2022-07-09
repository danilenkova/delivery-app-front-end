import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { shopsSelectors } from "../../redux/shops";
import { cartSelectors } from "../../redux/cart";

import ShopsList from "../ShopsList";
import Products from "../Products";
import { Wrapper } from "./Shop.styled";

const Shop = () => {
  const shopsList = useSelector(shopsSelectors.getShopsList);
  const cart = useSelector(cartSelectors.getCart);
  const [currentShop, setCurrentShop] = useState(null);
  useEffect(() => {
    cart.length > 0
      ? setCurrentShop(cart[0].shop)
      : setCurrentShop(shopsList[0]._id);
  }, [shopsList, cart]);
  const changeCurrentShop = (id) => {
    setCurrentShop(id);
  };

  return (
    <Wrapper>
      {shopsList && (
        <ShopsList
          shops={shopsList}
          onClick={changeCurrentShop}
          current={currentShop}
        />
      )}
      <Products current={currentShop} />
    </Wrapper>
  );
};

export default Shop;
