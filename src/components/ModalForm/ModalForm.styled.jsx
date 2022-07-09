import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 420px;
  padding: 20px;
  background-color: #ffffff;
  @media screen and (min-width: 1024px) {
    padding: 30px;
    width: 560px;
  }
`;

export const ProductImage = styled.div`
  display: block;
  overflow: hidden;
  & img {
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.h2`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Count = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: #111111;
  :focus,
  :hover {
    background-color: #f46d40;
    color: #f2f2f2;
  }
  :disabled {
    color: #f2f2f2;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  cursor: pointer;
  padding: 5px;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  background-color: #f46d40;
  color: #ffffff;
  text-shadow: -1px -2px 1px #000;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5);
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    text-shadow: 1px 2px 1px #000;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: #111111;
  :focus,
  :hover {
    background-color: #f46d40;
    color: #f2f2f2;
  }
`;
