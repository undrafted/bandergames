import styled from "styled-components";
import { Color } from "../../../tokens/colors";
import { mediaMinWidth } from "../../../tokens/mediaQueries";
export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaMinWidth.xs} {
    flex-direction: row;
  }
`;

export const TextWrapper = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  color: ${Color.white};
  display: none;

  ${mediaMinWidth.xs} {
    display: block;
    font-size: 69px;
  }

  ${mediaMinWidth.sm} {
    font-size: 100px;
  }

  ${mediaMinWidth.md} {
    font-size: 120px;
  }
`;

export const ImgWrapper = styled.img`
  height: 169px;
  width: 169px;

  ${mediaMinWidth.xs} {
    height: 150px;
    width: 150px;
    margin: -36px 0 0 8px;
  }

  ${mediaMinWidth.sm} {
    height: 170px;
    width: 170px;
  }

  ${mediaMinWidth.md} {
    height: 190px;
    width: 190px;
  }
`;
