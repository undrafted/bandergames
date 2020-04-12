import React from "react";
import { HeaderWrapper, NavWrapper } from "./index.styles";
import Bandergames from "../icons/Bandergames";

const Header = () => {
  return (
    <HeaderWrapper>
      <Bandergames />
      <NavWrapper>Coming soon</NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
