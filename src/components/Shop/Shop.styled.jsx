import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 1239px) {
    flex-direction: column;
  }
`;
