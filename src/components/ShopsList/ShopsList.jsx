import { useSelector } from "react-redux";

import { cartSelectors } from "../../redux/cart";
import { Wrapper, Title, List, Shop, ShopButton } from "./ShopsList.styled";

const ShopsList = ({ shops, onClick, current }) => {
  const productsInCart = useSelector(cartSelectors.getCart);
  return (
    <Wrapper>
      <Title>Shops:</Title>
      <List>
        {shops.map(({ _id, name }) => (
          <Shop key={_id}>
            <ShopButton
              onClick={() => onClick(_id)}
              current={_id === current}
              disabled={
                productsInCart.length !== 0 &&
                (productsInCart.map((item) => item.shop).includes(_id)
                  ? false
                  : true)
              }
            >
              {name}
            </ShopButton>
          </Shop>
        ))}
      </List>
    </Wrapper>
  );
};

export default ShopsList;
