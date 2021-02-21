import React, { Component } from "react";
import styled from "styled-components";
import { Tooltip, IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Icon from "./icon.png";
import { Link } from "react-router-dom";
import "./agentComponent.css";
import SearchIcon from "@material-ui/icons/Search";
import CallIcon from "@material-ui/icons/Call";
import RoomIcon from "@material-ui/icons/Room";
import SubjectIcon from "@material-ui/icons/Subject";
import SubmitButton from '../Login/SubmitButton';
import Footer from "../Footer/Footer";
import { observer } from "mobx-react";
import AgentDetail from './agentDetail';
import InputField from '../Login/InputField';
import UserStore from "../Stores/UserStore";

class AgentComponent extends Component {
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
    if (val.length > 12) {
      return;
    }
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
  async componentDidMount() {
    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    function openLogin() {
      document.getElementById("div_class").style.transform = "translateX(0%)";
    }
    function closeLogin() {
      document.getElementById("div_class").style.transform = "translateX(100%)";
    }
    function toggleClick() {
      const toggleMenu = document.querySelector(".menuAction__contentNav");
      toggleMenu.classList.toggle("activeMenuContentNav");
    }
    if (UserStore.loading) {
      return (
        <div className="contentLoadPage">
          <i class="fas fa-spinner"></i>
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <>
            <div className="navbarContainer">
              <div className="navbarLeftContainer">
                <img
                  src={Icon}
                  alt="Logo"
                  title="Logo"
                  className="logoImage__navbar"
                />
                <a
                  href="/agent"
                  style={{ textDecoration: "none", color: "#000" }}
                  className="paragraphLinker"
                >
                  სააგენტოები
            </a>
                <p className="paragraphLinker">დეველოპერები</p>
              </div>
              <div className="actionContent__loggedNav">
                <div className="profileContainer__contentNav">
                  <img
                    src="https://img.icons8.com/color/2x/test-account.png"
                    alt=""
                    onClick={toggleClick}
                  />
                </div>
                <div className="menuAction__contentNav">
                  <h3>
                    {UserStore.username}
                    <br /> <span>მომხმარებელი</span>
                  </h3>
                  <ul>
                    <li>
                      <img
                        src="https://img.icons8.com/material-two-tone/2x/user-female-circle.png"
                        alt=""
                      />
                  ჩემი პროფილი
                </li>
                    <li>
                      <img
                        src="https://img.icons8.com/plasticine/2x/gear.png"
                        alt=""
                      />
                  პარამეტრები
                </li>
                    <li>
                      <img src="https://img.icons8.com/doodle/2x/help.png" alt="" />
                  დახმარება
                </li>
                    <li onClick={() => this.doLogout()}>
                      <img
                        src="https://img.icons8.com/ios-filled/2x/logout-rounded-up.png"
                        alt=""
                      />
                  გასვლა
                </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr
              style={{
                border: "none",
                backgroundColor: "lightgray",
                height: "1px",
              }}
            />
            <AgentDetail />
            <Footer />
          </>
        );
      }
      return (
        <>
           <div className="navbarContainer">
          <div className="navbarLeftContainer">
            <img
              src={Icon}
              alt="Logo"
              title="Logo"
              className="logoImage__navbar"
            />
            <div className="content__paragraphs">
              <a className="paragraphLinker" href="/agent" style={{textDecoration: "none"}}>სააგენტოები</a>
              <p className="paragraphLinker">დეველოპერები</p>
            </div>
          </div>
          <div className="navbarCenterContainer">
            <div className="buttonContentNav">
              <svg class="iconAdd__Navbar" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
              დამატება
            </div>
            <div
              className="connectButtonContent"
              style={{ marginRight: "20px" }}
              onClick={openLogin}
            >
              <svg class="personIcon__nav" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
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
                      onChange={(val) => this.setInputValues("username", val)}
                    />
                    <br />
                    <InputField
                      type="password"
                      placeholder="პაროლი"
                      className="passwordUser__inputLogin"
                      id="passwordUser__inputLoginID"
                      value={this.state.password ? this.state.password : ""}
                      onChange={(val) => this.setInputValues("password", val)}
                      name="passwordLogin"
                    />
                    <a
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
                    </a>
                    <SubmitButton
                      text="შესვლა"
                      disabled={this.state.buttonDisabled}
                      onClick={() => this.doLogin()}
                    />
                  </div>
                  <div className="form__registrationLogin">
                    <a
                      to="/registration"
                      className="form__registrationContentLogin"
                      id="registrationContent__login"
                    >
                      რეგისტრაცია
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "none",
            backgroundColor: "lightgray",
            height: "1px",
          }}
        />
        <AgentDetail />
        <Footer />
        </>
      );
    }
  }
}

export default observer(AgentComponent);
