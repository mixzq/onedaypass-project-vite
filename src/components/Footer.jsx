import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <div className="footer">
        <p> copyright©2022.ZHANGQING.All rights reserved</p>
      </div>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.div`
  * {
    font-family: "Roboto Mono", monospace;
  }
  .footer {
    background-color: rgba(221, 223, 218, 0.7);
    width: 100vw;
    height: 60px;
    bottom: 0%;
  }
  p {
    text-align: center;
    padding: 25px 0 0 0;

    font-size: x-small;
    color: #ffffff;
  }
  @media screen and (max-width: 1198px) {
    .footer {
      background-color: rgba(242, 198, 156, 0.4);
      width: 100vw;
      height: 30px;
      bottom: 0%;
    }
    p {
      text-align: center;
      padding: 10px 0 0 0;

      font-size: x-small;
      color: #ffffff;
    }
  }
`;
