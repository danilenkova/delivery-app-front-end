import { NavLink } from "react-router-dom";

import { NavBar, NavMenu, NavItem } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavBar>
      <NavMenu>
        <NavItem>
          <NavLink to="/">Shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="cart">Shopping Cart</NavLink>
        </NavItem>
      </NavMenu>
    </NavBar>
  );
};

export default Navigation;
