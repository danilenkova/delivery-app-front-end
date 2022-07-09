import styled from "styled-components";

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 920px;
  }
  @media screen and (min-width: 1240px) {
    max-width: 1200px;
  }
`;
