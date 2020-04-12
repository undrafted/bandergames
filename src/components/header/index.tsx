import React from "react";
import { HeaderWrapper, LogoWrapper, NavWrapper } from "./index.styles";
import Bandergames from "../icons/Bandergames";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper href="/">
        <Bandergames />
      </LogoWrapper>

      <NavWrapper>Coming soon</NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
