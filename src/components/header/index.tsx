import React from "react";
import * as S from "./styles";
import Bandergames from "../icons/Bandergames";

const Header = () => {
  return (
    <S.Header>
      <S.Logo href="/">
        <Bandergames />
      </S.Logo>

      <S.Nav>Coming soon</S.Nav>
    </S.Header>
  );
};

export default Header;
