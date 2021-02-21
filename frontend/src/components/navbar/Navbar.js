import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconClose from "@material-ui/icons/Close";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { Tooltip, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import Icon from "./icon.png";
import "../Login/Login.css";
import CloseIcon from "@material-ui/icons/Close";
import { useSpring, animated } from "react-spring";
import UserStore from "../Stores/UserStore";
import SubmitButton from "../Login/SubmitButton";
import InputField from "../Login/InputField";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonDisabled: false,
    };
  }
  setInputValues(property, val) {
    val = val.trim();
    this.setState({
      [property]: val,
    });
  }
  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  }
  async doLogin() {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });
    try {
      let res = await fetch("/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }
  render() {
    function openLogin() {
      document.getElementById("div_class").style.transform = "translateX(0%)";
    }
    function closeLogin() {
      document.getElementById("div_class").style.transform = "translateX(100%)";
    }

    return (
      <>
        <div className="navbarContainer">
          <div className="navbarLeftContainer">
            <a href="/">
              <img
                src={Icon}
                alt="Logo"
                title="Logo"
                className="logoImage__navbar"
              />
            </a>
            <div className="content__paragraphs">
              <a
                className="paragraphLinker"
                href="/agent"
                style={{ textDecoration: "none" }}
              >
                სააგენტოები
              </a>
              <p className="paragraphLinker">დეველოპერები</p>
            </div>
          </div>
          <div className="navbarCenterContainer">
            <div
              className="connectButtonContent"
              style={{ marginRight: "20px" }}
              onClick={openLogin}
            >
              <svg
                class="personIcon__nav"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
              შესვლა
            </div>
            <div className="div_class" id="div_class">
              <div className="loginWraperContainer">
                <div className="loginContainerContent">
                  <svg
                    class="iconClose__ic"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    aria-label="Close Icon"
                    onClick={closeLogin}
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                  <hr
                    style={{
                      border: "none",
                      height: "1px",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                  <div className="contentParagraph__login">
                    <p className="paragraphLoginContent">ავტორიზაცია</p>
                  </div>
                  <div className="contentInputs__login">
                    <InputField
                      type="text"
                      placeholder="სახელი"
                      className="userName__inputLogin"
                      value={this.state.username ? this.state.username : ""}
                      id="username__inputLoginID"
                      name="usernameLogin"
                      onChange={val => this.setInputValues("username", val)}
                    />
                    <br />
                    <InputField
                      type="password"
                      placeholder="პაროლი"
                      className="passwordUser__inputLogin"
                      id="passwordUser__inputLoginID"
                      value={this.state.password ? this.state.password : ""}
                      onChange={val => this.setInputValues("password", val)}
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
                    <SubmitButton
                      text="შესვლა"
                      disabled={this.state.buttonDisabled}
                      onClick={() => this.doLogin()}
                    />
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
                </div>
              </div>
            </div>
            {/* <Tooltip title="Georgia">
            <IconButton aria-label="Georgia">
              <img
                src="https://www.myhome.ge/framework/templates/assets/img/flags/ka.svg"
                alt="GEO"
                title="GEO"
                className="contentGEO__img"
                style={{ width: "35px", cursor: "pointer" }}
              />
            </IconButton>
          </Tooltip> */}
          </div>
        </div>
        <hr
          style={{
            border: "none",
            backgroundColor: "lightgray",
            height: "1px",
          }}
        />
      </>
    );
  }
}
export default Navbar;
