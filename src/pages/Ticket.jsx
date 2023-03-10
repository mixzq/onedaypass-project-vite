import React from "react";
import styled from "styled-components";
import Buses from "../components/Buses";
import Email from "../components/Email";

function Ticket() {
  return (
    <Style>
      <div>
        <div className="mainContainer">
          <div className="empty"> </div>
          <div className="emailSheet">
            <Email />
          </div>
          <div className="bus">
            <Buses />
          </div>
        </div>
      </div>
    </Style>
  );
}

export default Ticket;

const Style = styled.div`
  .mainContainer {
    display: flex;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    margin-top: 8vh;
  }
  .empty {
    width: 15vw;
  }
  .bus {
    margin-top: 1vw;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 1198px) {
    .mainContainer {
      margin: 0rem 0;
      height: auto;
      width: 100vw;
      display: flex;

      flex-direction: column;
      align-content: center;

      .bus {
        margin: 0 auto;
      }
    }
  }
`;
