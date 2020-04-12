import React from "react";
import { BodyWrapper } from "./index.styles";
import Banner from "./banner";
import Content from "./content";

const Body = () => (
  <BodyWrapper>
    <Banner />
    <Content />
  </BodyWrapper>
);

export default Body;
