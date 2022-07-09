import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineClose,
} from "react-icons/ai";

import { cartSelectors, cartActions } from "../../redux/cart";

import {
  Wrapper,
  List,
  ListItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Count,
  CountButton,
  Empty,
} from "./ProductsOrder.styled";

const ProductsOrder = () => {
  const cart = useSelector(cartSelectors.getCart);
  const dispatch = useDispatch();

  const handleChange = (type, product) => {
    switch (type) {
      case "increment":
        dispatch(
          cartActions.setAmountInCart({
            ...product,
            amount: product.amount + 1,
          })
        );
        break;
      case "decrement":
        if (product.amount > 1) {
          dispatch(
            cartActions.setAmountInCart({
              ...product,
              amount: product.amount - 1,
            })
          );
        }
        if (product.amount === 1) {
          return product.amount;
        }
        break;
      default:
        return;
    }
  };

  const deleteProductInCart = (id) => {
    dispatch(cartActions.deleteProductInCart(id));
  };

  const totalPrice = (product) => (product.price * product.amount).toFixed(2);

  return (
    <Wrapper>
      {cart.length > 0 ? (
        <List>
          {cart.map((item) => (
            <ListItem key={item._id}>
              <ProductImage>
                <img src={item.image} alt={item.name} />
              </ProductImage>
              <ProductInfo>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>Price: ${item.price}</ProductPrice>
                <Count>
                  <CountButton
                    onClick={() => handleChange("decrement")}
                    disabled={item.amount === 1 ? true : false}
                  >
                    <AiOutlineCaretLeft />
                  </CountButton>
                  <p>{item.amount}</p>
                  <CountButton onClick={() => handleChange("increment")}>
                    <AiOutlineCaretRight />
                  </CountButton>
                  <CountButton
                    type="button"
                    title="Delete product"
                    onClick={() => deleteProductInCart(item._id)}
                  >
                    <AiOutlineClose />
                  </CountButton>
                </Count>
                <p>Total price: ${totalPrice(item)}</p>
              </ProductInfo>
            </ListItem>
          ))}
        </List>
      ) : (
        <Empty>
          <p>Cart is empty</p>
        </Empty>
      )}
    </Wrapper>
  );
};

export default ProductsOrder;
