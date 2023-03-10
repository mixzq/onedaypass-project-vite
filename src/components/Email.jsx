import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const App = () => {
  let [buttonText, setButtonText] = useState("Book");
  let [buttonColour, setbuttonColour] = useState(false);
  let [netBox, setNetBox] = useState(false);
  let [dBox, setDBox] = useState(false);

  //remander for empty form and send email
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "") {
      alert("Please make sure your info is correct");
    } else {
      setFormSubmitted(true);
      sendEmail();
      buttonTextSwitch();
      event.target.reset();
      reSet();
      console.log("Form submitted:", name, email);
    }
  };

  const reSet = () => {
    setEmail("");
    setName("");
    setNetBox(false);
    setDBox(false);
  };

  //
  const buttonTextSwitch = async () => {
    setTimeout(() => {
      setButtonText("Done");
    }, 1500);

    setTimeout(() => {
      setButtonText("Book");
    }, 5000);
    setTimeout(() => {
      setbuttonColour(true);
    }, 1500);

    setTimeout(() => {
      setbuttonColour(false);
    }, 5000);
  };

  //Email sned function
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_1z6jmu1",
        "template_5ul9qg5",
        form.current,
        "KOsrCBE4oURQv-hOw"
      )
      .then(
        (result) => {
          console.log(result.text);

          // e.target.reset();

          console.log("hahaha");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Style>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="email">
          <div className="title">
            <h5>1. Choos your subscribes .</h5>
            <h5>2. You will get account info.</h5>
            <h5>3. pay the fee to get password.</h5>
          </div>

          <div class="form">
            <div class="input-container ic1">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="firstname"
                class="input"
                type="text"
                placeholder=" "
                name="from_name"
              />
              <div class="cut"></div>
              <label for="firstname" class="placeholder">
                Name
              </label>
            </div>
            <div class="input-container ic2">
              <input
                onChange={(e) => setName(e.target.value)}
                id="lastname"
                class="input"
                type="text"
                placeholder=" "
                name="user_email"
              />
              <div class="cut"></div>
              <label for="lastname" class="placeholder">
                Email
              </label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                className="my-checkbox"
                value="Netflix"
                name="Net"
                checked={netBox}
                onChange={() => {
                  setNetBox(!netBox);
                }}
              />
              Netflix
              <input
                type="checkbox"
                className="my-checkbox"
                value="Disney+"
                name="Dis"
                checked={dBox}
                onChange={() => {
                  setDBox(!dBox);
                }}
              />
              Disney+
            </div>
            <textarea
              name="message1"
              className="textarea"
              value={dBox ? "Disney+: disney+@879.com" : ""}
              readOnly
            />
            <textarea
              name="message2"
              className="textarea"
              value={netBox ? "Netflix: netflix@234.com " : ""}
              readOnly
            />
            <button
              type="text"
              className="submit"
              // onClick={buttonTextSwitch}
              id={buttonColour ? "yellow" : ""}
              disabled={formSubmitted}
            >
              {buttonText}
            </button>
            <div className="ifNotreceive">
              <p id="email">Haven't receive a email ? contac us !</p>
              <p id="email">ly644460302@gmail.com</p>
            </div>
          </div>
        </div>
      </form>
    </Style>
  );
};

export default App;
const Style = styled.div`
  * {
    font-family: sans-serif;
  }
  .email {
    width: 50vw;
    margin-bottom: 2rem;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .textarea {
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
  .title {
    padding: 1vw;
    margin: 3vh 0.5vw;
    width: 40vw;
    h5 {
      color: black;
      font-size: 2.5vh;
    }
  }
  @media screen and (max-width: 1198px) {
    .email {
      .form {
        width: 80vw;
      }
      .title {
        margin-bottom: 1rem;
        flex-direction: column;
        height: 14vh;
        justify-content: space-between;
        margin-bottom: 2rem;

        width: 85%;
        h5 {
          line-height: 8vw;
          font-size: 4.2vw;
          color: #313131;
        }
      }
      .form {
        padding: 20px 20px 0px 20px;
      }
    }
  }

  .form {
    background-color: #a6abdf;
    border-radius: 20px;
    box-sizing: border-box;
    height: 480px;
    padding: 20px;
    width: 30vw;
  }

  .title {
    color: #ffffff;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }

  .subtitle {
    color: #ffffff;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 40px;
  }

  .ic2 {
    margin-top: 30px;
  }

  .input {
    background-color: #e3e5ee;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #000000;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }

  .cut {
    background-color: #a6abdf;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 500ms;
    width: 76px;
  }

  .cut-short {
    width: 50px;
  }

  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: #2f2f6f;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }

  .input:focus ~ .placeholder {
    color: #000000;
  }

  .checkbox {
    display: flex;
    margin: 30px 0px;

    .my-checkbox {
      margin: 0 12px;
      transform: scale(2);
    }
  }

  .submit {
    background-color: #414141;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 20px;
    height: 50px;
    margin-top: 10px;
    letter-spacing: 2px;

    text-align: center;
    width: 100%;
  }
  #yellow {
    background-color: #cbc239;
  }
  .submit:active {
    background-color: #06b;
  }

  .ifNotreceive {
    margin: 10px;
  }

  @media screen and (max-width: 1198px) {
    .email {
      padding: 0;
      width: 100vw;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .form {
      background-color: #a6abdf;
      border-radius: 20px;
      box-sizing: border-box;
      height: 490px;
      padding: 20px;
      width: 85vw;
      justify-content: center;
      align-items: center;
    }
  }
`;
