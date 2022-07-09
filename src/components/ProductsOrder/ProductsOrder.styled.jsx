import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  flex-basis: calc((100%-20px) / 2);
  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 430px;
  }
  @media screen and (min-width: 1240px) {
    width: 570px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 20px;
  padding-bottom: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  border-radius: 10px;
`;

export const ProductImage = styled.div`
  display: block;
  width: 250px;
  overflow: hidden;
`;

export const ProductInfo = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.h2`
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  margin-bottom: 10px;
`;

export const Count = styled.div`
  display: flex;
  width: 150px;
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

export const Empty = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 24px;
`;
