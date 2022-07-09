import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartSelectors } from "../../redux/cart";
import { productsSelectors } from "../../redux/products";

import Modal from "../Modal";
import ModalForm from "../ModalForm";

import {
  Wrapper,
  List,
  Product,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Button,
} from "./Products.styled";

const Products = ({ current }) => {
  const products = useSelector(productsSelectors.getProducts);
  const productsInCart = useSelector(cartSelectors.getCart);
  const [shop, setShop] = useState("");

  const [isOpen, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    productsInCart.length !== 0
      ? setShop(productsInCart[0].shop)
      : setShop(current);
  }, [current, productsInCart]);

  const handleOpenModal = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <List>
        {products &&
          products
            .filter((item) => item.shop === shop)
            .map((item) => (
              <Product key={item._id}>
                <ProductImage>
                  <img src={item.image} alt={item.name} />
                </ProductImage>
                <ProductInfo>
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice>
                    <p>${item.price}</p>
                    <Button onClick={() => handleOpenModal(item)}>
                      Add to Cart
                    </Button>
                  </ProductPrice>
                </ProductInfo>
              </Product>
            ))}
      </List>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <ModalForm
            product={currentProduct}
            onClose={handleCloseModal}
          ></ModalForm>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Products;
