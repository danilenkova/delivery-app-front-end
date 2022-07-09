import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 430px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1240px) {
    width: 570px;
    margin-right: 20px;
  }
`;

export const StyledForm = styled.div``;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const FormField = styled.span`
  width: 100%;
  margin-bottom: 15px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  border-radius: 20px;
  border: 0;
  outline: none;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),
    1px 4px 6px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(0, 0, 0, 0.12),
    inset 0px 4px 4px rgba(0, 0, 0, 0.15), inset 1px 4px 6px rgba(0, 0, 0, 0.16);
`;
