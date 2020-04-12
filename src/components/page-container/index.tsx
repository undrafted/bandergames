import React from "react";
import { PageWrapper } from "./index.styles";
import Header from "../header";
import Body from "../body";
import Banner from "../banner";
const PageContainer = () => {
  return (
    <PageWrapper>
      <Header />
      <Body>
        <Banner />
      </Body>
    </PageWrapper>
  );
};

export default PageContainer;
