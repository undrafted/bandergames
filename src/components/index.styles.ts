import styled from "styled-components";
import { Color } from "../tokens/colors";
import { mediaMinWidth } from "../tokens/mediaQueries";

export const AppWrapper = styled.div`
  background: ${Color.brandPurple};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 18px 16px;

  ${mediaMinWidth.xs} {
    padding: 18px 40px;
  }
`;
