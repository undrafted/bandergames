import styled from "styled-components";
import { Color } from "../../../tokens/colors";
import { mediaMinWidth } from "../../../tokens/mediaQueries";

export const Content = styled.div`
  margin-top: 40px;
  width: 100%;

  ${mediaMinWidth.sm} {
    padding-left: 80px;
  }
`;

export const P = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: ${Color.white};
  text-align: justify;
  line-height: 1.6em;
  text-indent: 2em;

  &:not(:last-child) {
    margin-bottom: 22px;
  }

  & .highlight {
    color: ${Color.brandOrage};
  }

  ${mediaMinWidth.xs} {
    font-size: 22px;

    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;
