import React from "react";
import { BannerWrapper, TextWrapper, ImgWrapper } from "./index.styles";
import octo from "./octo.png";

const Banner = () => (
  <BannerWrapper>
    <TextWrapper>
      Bander
      <br />
      Games
    </TextWrapper>
    <ImgWrapper src={octo} />
  </BannerWrapper>
);

export default Banner;
