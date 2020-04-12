import React from "react";
import { BodyWrapper } from "./index.styles";

const Body = ({ children }: { children: React.ReactNode }) => (
  <BodyWrapper>{children}</BodyWrapper>
);

export default Body;
