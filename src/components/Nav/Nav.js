import React from "react";
import { styled } from "styled-components";

const Nav = () => {
  return (
    <NavMenu>
      <span>Men</span>
      <span> | </span>
      <span>Clothing</span>
      <span> | </span>
      <span>Basic Tee 6-Pack</span>
    </NavMenu>
  );
};

export default Nav;

const NavMenu = styled.div`
  font-size: 1.3rem;
  text-align: left;
  margin-left: 3rem;
  margin-top: 1rem;
`;
