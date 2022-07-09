import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SubmitBlock = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: baseline;
`;

export const TotalOfOrder = styled.p`
  margin-right: 20px;
`;

export const FormButton = styled.button`
  width: 250px;
  height: 40px;
  padding: 4px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
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
