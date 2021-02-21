import React, { Component } from "react";
import Icon from "../appInformation/icon.png";
import Banner from "../banner/Banner";
import Footer from "../Footer/Footer";
import FullCard from "../Cards/FullCard";
import PopularStreet from "../Popular/PopularStreet";
import UserStore from "../Stores/UserStore";
import { observer } from "mobx-react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SecondSubmitButton from "../Login/styledSubmitButton";
import "./appInfo.css";
import { Link, Router } from "react-router-dom";
import SocialButton from "../socialButton/SocialButton";
import Service from "../service/service";

class AppInfo extends Component {
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
        UserStore.ID = result.ID;
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
    function toggleClick() {
      const toggleMenu = document.querySelector(".menuAction__contentNav");
      toggleMenu.classList.toggle("activeMenuContentNav");
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
            <a
              href="/agent"
              style={{ textDecoration: "none", color: "#000" }}
              className="paragraphLinker"
            >
              სააგენტოები
            </a>
            <p className="paragraphLinker">დეველოპერები</p>
          </div>
          <div className="buttonContentNav">
            <svg
              class="iconAdd__Navbar"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
            </svg>
            <a
              href="/add"
              className="atagfor__profileaddcontainerhref"
              style={{ textDecoration: "none", color: "#000" }}
            >
              დამატება
            </a>
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
        <Banner />
        <FullCard />
        <SocialButton />
        <PopularStreet />
        <Service />
        <Footer />
      </>
    );
  }
}
export default observer(AppInfo);
