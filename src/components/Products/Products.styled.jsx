import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  @media screen and (max-width: 1239px) {
    display: flex;
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 770px;
  padding: 10px;
  @media screen and (min-width: 1024px) {
    padding: 20px;
    padding-bottom: 0;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f46d40;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) {
    flex-basis: calc((100% - 20px) / 2);
    margin: 0;
    margin-bottom: 20px;
    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }
  }
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5);
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
`;

export const ProductImage = styled.div`
  display: block;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h2`
  margin-bottom: 10px;
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
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
