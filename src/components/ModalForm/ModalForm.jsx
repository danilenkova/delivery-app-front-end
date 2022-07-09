import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineClose,
} from "react-icons/ai";
import { cartActions, cartSelectors } from "../../redux/cart";
import {
  Wrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Count,
  CountButton,
  Button,
  Close,
} from "./ModalForm.styled";

const ModalForm = ({ product, onClose }) => {
  const [amount, setAmount] = useState(1);
  const productInCart = useSelector(cartSelectors.getCart);
  const dispatch = useDispatch();

  const handleChange = (type) => {
    switch (type) {
      case "increment":
        setAmount((prevCount) => prevCount + 1);
        break;
      case "decrement":
        if (amount > 1) {
          setAmount((prevCount) => prevCount - 1);
        }
        if (amount === 1) {
          return amount;
        }
        break;
      default:
        return;
    }
  };

  const addToCart = (product) => {
    if (productInCart.some((item) => item._id === product._id)) {
      dispatch(cartActions.updateAmountInCart({ ...product, amount }));
      toast.success(`Product added to cart`, {
        pauseOnFocusLoss: false,
        autoClose: 2000,
        pauseOnHover: false,
        theme: "colored",
      });
    }
    if (!productInCart.some((item) => item._id === product._id)) {
      dispatch(cartActions.addProductToCart({ ...product, amount }));
    }
  };

  return (
    <Wrapper>
      <Close type="button" title="Close" onClick={() => onClose()}>
        <AiOutlineClose />
      </Close>
      <ProductImage>
        <img src={product.image} alt={product.name} />
      </ProductImage>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
        <Count>
          <CountButton
            onClick={() => handleChange("decrement")}
            disabled={amount === 1 ? true : false}
          >
            <AiOutlineCaretLeft />
          </CountButton>
          <p>{amount}</p>
          <CountButton onClick={() => handleChange("increment")}>
            <AiOutlineCaretRight />
          </CountButton>
        </Count>
        <Button type="button" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </ProductInfo>
    </Wrapper>
  );
};

export default ModalForm;
