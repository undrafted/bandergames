import React from "react";
import { BannerWrapper, ImgWrapper } from "./index.styles";
import octo from "./octo.png";

const Banner = () => (
  <BannerWrapper>
    <h1>
      Bander
      <br />
      Games
    </h1>
    <ImgWrapper src={octo} />
  </BannerWrapper>
);

export default Banner;
