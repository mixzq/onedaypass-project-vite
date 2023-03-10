import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <NavStyle>
      <div>
        <div className="nav">
          <ul>
            {/* <li>
              <a className="link" href="/">
                HOME
              </a>
            </li> */}
            <Link className="link" to="/">
              <li>HOME</li>
            </Link>
            <Link className="link" to="/ticket">
              <li>TICKET</li>
            </Link>
            <Link className="link" to="about">
              <li>ABOUT</li>
            </Link>
          </ul>
        </div>
      </div>
    </NavStyle>
  );
}

export default Nav;

const NavStyle = styled.div`
  * {
    /* border: 3px solid; */

    background: transparent;

    .nav {
      z-index: 1;
      top: 0%;
      right: 10%;
      width: 100%;
      justify-content: flex-end;
      position: fixed;
      display: flex;
      flex-direction: row;

      ul {
        letter-spacing: 0.1vw;
        border-radius: 0 0 2rem 2rem;
        width: 18vw;
        padding: 0 1rem;
        height: 4vh;
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        background-color: rgb(0, 0, 0, 0.7);
        align-items: center;

        .link {
          font-weight: 400;
          color: #ffffff;
          text-decoration: none;
        }
        .link:hover {
          transition: 250ms;
          color: #000000;
        }

        li {
          font-size: 1vw;
        }
      }
    }
  }

  @media screen and (max-width: 1198px) {
    .nav {
      top: 2%;
      right: 0%;
      width: 100%;
      justify-content: flex-end;
      position: fixed;
      display: flex;
      flex-direction: row;

      ul {
        letter-spacing: 0.1vh;
        border-radius: 1rem 0 0 1rem;
        width: 8vw;
        height: 20vh;

        flex-direction: column;

        li {
          font-size: 1.5vh;
          font-weight: 900;

          transform: rotate(90deg);
        }
      }
    }
  }
`;
