import styled from "styled-components";
import { Color } from "../../tokens/colors";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  align-items: center;
`;

export const NavWrapper = styled.div`
  color: ${Color.white};
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;
