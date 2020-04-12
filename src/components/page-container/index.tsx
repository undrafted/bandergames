import React from "react";
import { PageWrapper } from "./index.styles";
import Header from "../header";
import Body from "../body";

const PageContainer = () => {
  return (
    <PageWrapper>
      <Header />
      <Body />
    </PageWrapper>
  );
};

export default PageContainer;
