import styled from "styled-components";
import { Color } from "../../../tokens/colors";

export const ContentWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  padding-left: 80px;
`;

export const PWrapper = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  line-height: 1.2em;
  color: ${Color.white};

  &:not(:last-child) {
    margin-bottom: 22px;
  }

  & .highlight {
    color: ${Color.brandOrage};
  }
`;
