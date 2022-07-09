import styled from "styled-components";

export const Wrapper = styled.div`
  width: 17%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  @media screen and (max-width: 1239px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 0;
  margin-right: 10px;
  font-size: 18px;
  @media screen and (min-width: 1239px) {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const List = styled.ul`
  @media screen and (max-width: 1239px) {
    display: flex;
    flex-wrap: wrap;
  }
  display: block;
`;

export const Shop = styled.li`
  margin: 5px;
  @media screen and (min-width: 1239px) {
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const ShopButton = styled.button`
  @media screen and (max-width: 1023px) {
    width: 100px;
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1239px) {
    width: 130px;
    font-size: 16px;
  }
  width: 100%;
  height: 40px;
  cursor: pointer;
  padding: 5px;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  background-color: #f46d40;
  color: #ffffff;
  text-shadow: ${(p) =>
    p.current ? "1px 2px 1px #000" : "-1px -2px 1px #000"};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5);
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    text-shadow: 1px 2px 1px #000;
  }
  &:disabled {
    background-color: #faa689;
  }
`;
