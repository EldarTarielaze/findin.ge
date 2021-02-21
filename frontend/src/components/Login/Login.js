import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import "./Login.css";
import { Link } from "react-router-dom";

const BackgroundBlackBG = styled.div`
  width: 100%;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  font-family: "BPG Mrgvlovani Caps", sans-serif;
  font-size: 12.5px;
  justify-content: flex-end;
`;

const LoginWraperContainer = styled.div`
  width: 500px;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  z-index: 10;
  position: relative;
`;

const LoginContainerContent = styled.div`
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const IconClose = styled(CloseIcon)`
  cursor: pointer;
  position: relative;
  top: 20px;
  margin-left: 450px;
  margin-bottom: 40px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ContentParagraph__login = styled.div`
  padding: 40px 70px;
`;

const ParagraphLoginContent = styled.p`
  font-family: "BPG Mrgvlovani Caps", sans-serif;
  font-weight: 700;
  user-select: none;
  font-size: 14px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f5f5f5;
`;

const Login = ({ showLoginSystem, setShowLoginSystem }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const loginRef = useRef();

  const animationed = useSpring({
    config: {
      duration: 250,
    },
  });

  const closeModal = e => {
    if (loginRef.current === e.target) {
      setShowLoginSystem(false);
    }
  };

  return (
    <>
      {showLoginSystem ? (
        <BackgroundBlackBG ref={loginRef} onClick={closeModal}>
          <animated.div style={animationed}>
            <LoginWraperContainer showLoginSystem={showLoginSystem}>
              <LoginContainerContent>
                <IconClose
                  aria-label="Close Icon"
                  onClick={() => setShowLoginSystem(prev => !prev)}
                />
                <hr
                  style={{
                    border: "none",
                    height: "1px",
                    backgroundColor: "#f5f5f5",
                  }}
                />
                <ContentParagraph__login>
                  <ParagraphLoginContent>ავტორიზაციdsaა</ParagraphLoginContent>
                </ContentParagraph__login>
                <div className="contentInputs__login">
                  <input
                    type="text"
                    onChange={e => setMail(e.target.value)}
                    placeholder="მომხმარებლის ფოსტა"
                    className="userName__inputLogin"
                    id="username__inputLoginID"
                    name="usernameLogin"
                  />
                  <br />
                  <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="პაროლი"
                    className="passwordUser__inputLogin"
                    id="passwordUser__inputLoginID"
                    name="passwordLogin"
                  />
                  <Link
                    to="/forgotpassword"
                    className="resetPassword__class"
                    style={{
                      textDecoration: "none",
                      textDecorationLine: "none",
                      color: "#29b24e",
                    }}
                    id="resetPassword__id"
                    name="resetPassword__name"
                  >
                    დაგავიწყდა მონაცემები?
                  </Link>
                  <Link
                    to="/logged"
                    className="buttonLogin__className"
                    id="buttonLogin__id"
                    name="buttonLogin__name"
                  >
                    შესვლა
                  </Link>
                </div>
                <div className="form__registrationLogin">
                  <Link
                    to="/registration"
                    className="form__registrationContentLogin"
                    id="registrationContent__login"
                  >
                    რეგისტრაცია
                  </Link>
                </div>
              </LoginContainerContent>
            </LoginWraperContainer>
          </animated.div>
        </BackgroundBlackBG>
      ) : null}
    </>
  );
};
export default Login;
