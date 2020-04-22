import React from "react";
import * as S from "./styles";
import Header from "../header";
import Body from "../body";

const PageContainer = () => {
  return (
    <S.Page>
      <Header />
      <Body />
    </S.Page>
  );
};

export default PageContainer;
