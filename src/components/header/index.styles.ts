import styled from "styled-components";
import { Color } from "../../tokens/colors";
import { mediaMinWidth } from "../../tokens/mediaQueries";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  align-items: center;
`;

export const LogoWrapper = styled.a`
  margin-top: 3px;

  & svg {
    width: 170px;
    height: 52px;
  }
  ${mediaMinWidth.sm} {
    & svg {
      width: 225px;
      height: 70px;
    }
  }
`;

export const NavWrapper = styled.div`
  color: ${Color.white};
  font-family: "Poppins", sans-serif;
  font-size: 18px;

  ${mediaMinWidth.sm} {
    font-size: 24px;
  }
`;
