import React from "react";
import styled from "styled-components";
import colorBackground from "./images/colorBackground.svg";
import backgroundPhone from "./images/backgroundPhone.svg";

function Background() {
  return (
    <Backgroundstyle>
      <div className="backGround"></div>
    </Backgroundstyle>
  );
}

export default Background;
const Backgroundstyle = styled.div`
  .backGround {
    opacity: 0.3;
    height: auto;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0%;
    right: 0;
    z-index: -1;
    overflow: hidden;
  }
  .backGround::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url(${colorBackground});
    background-repeat: repeat;
    background-size: cover;
  }
  @media screen and (max-width: 1198px) {
    .backGround::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: url(${backgroundPhone});
      background-repeat: repeat;
      background-size: cover;
    }
  }
`;
