import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutStyle>
      <div className="main">
        <div className="disclaimer">
          <p>
            Disclaimer: The main purpose of this website is for practicing web
            development. If this website violates any regulations set by
            relevant authorities, please contact me and I will promptly make the
            necessary changes. Thank you for visiting this website.
          </p>
          <br />
          <h6>Adam:mixzq@outlook.com</h6>
        </div>
      </div>
    </AboutStyle>
  );
}

export default About;
const AboutStyle = styled.div`
  .main {
    height: 100vh;

    .disclaimer {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 30vw;
      margin: 5rem;
      h6 {
        font-size: medium;
        
      }
      p {
        font-size: large;
        font-style: italic;
      }
      
    }
  }
  @media screen and (max-width: 1198px) {
    .main {
      height: 100vh;
    

    .disclaimer {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 70vw;
      margin: 1.5rem 2rem;
      h6 {
        font-size: small;
      }
      p {
        font-size: medium;
        font-style: italic;
      }
      span {
        padding: 2px 9px;
        background-color: #fccab3;
        border-radius: 0.5rem;
      }
    }
    
  }
`;
