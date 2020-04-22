import React from "react";
import * as S from "./styles";
import octo from "./octo.png";

const Banner = () => (
  <S.Banner>
    <S.Text>
      Bander
      <br />
      Games
    </S.Text>
    <S.Img src={octo} />
  </S.Banner>
);

export default Banner;
