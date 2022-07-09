import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions, cartSelectors } from "../../redux/cart";
import { ordersOperations } from "../../redux/orders";

import OrderForm from "../OrderForm";
import ProductsOrder from "../ProductsOrder";

import {
  Wrapper,
  Form,
  OrderInfo,
  SubmitBlock,
  TotalOfOrder,
  FormButton,
} from "./Cart.styled";

const Cart = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState("");
  const dispatch = useDispatch();

  const productInCart = useSelector(cartSelectors.getCart);

  useEffect(() => {
    if (productInCart) {
      const totalPrice = productInCart
        .reduce((acc, item) => (acc += Number(item.price) * item.amount), 0)
        .toFixed(2);
      setTotal(totalPrice);
    }
    return;
  }, [productInCart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      user: {
        name,
        email,
        phone,
        address,
      },
      order: { ...productInCart },
      total,
    };
    dispatch(ordersOperations.addOrder({ ...newOrder }));
    toast.success(`Your order has been sent`, {
      pauseOnFocusLoss: false,
      autoClose: 2000,
      pauseOnHover: false,
      theme: "colored",
    });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    dispatch(cartActions.removeCart());
  };

  return (
    <Wrapper>
      <Form onSubmit={handelSubmit}>
        <OrderInfo>
          <OrderForm
            name={name}
            email={email}
            phone={phone}
            address={address}
            handleInputChange={handleInputChange}
          />
          <ProductsOrder />
        </OrderInfo>
        <SubmitBlock>
          <TotalOfOrder>Total: ${total}</TotalOfOrder>
          <FormButton type="submit">Submit</FormButton>
        </SubmitBlock>
      </Form>
    </Wrapper>
  );
};

export default Cart;
