import styled from "styled-components";

export const NavBar = styled.nav``;

export const NavMenu = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
