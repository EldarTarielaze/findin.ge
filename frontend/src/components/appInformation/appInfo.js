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
