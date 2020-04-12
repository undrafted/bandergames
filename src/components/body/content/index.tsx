import React from "react";
import { ContentWrapper, PWrapper } from "./index.styles";
const Content = () => {
  return (
    <ContentWrapper>
      <PWrapper>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.{" "}
        <span className="highlight">
          We are a Berlin based entertainment and game development studio.
        </span>{" "}
        At vero eos et accusam et justo duo dolores et ea rebum.
      </PWrapper>
      <PWrapper>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat{" "}
        <span className="highlight">just play our games bro</span> qui blandit
        praesent luptatum zzril delenit augue duis dolore te feugait nulla
        facilisi.
      </PWrapper>
    </ContentWrapper>
  );
};

export default Content;
