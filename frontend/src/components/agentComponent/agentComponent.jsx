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
            <AgentDetail />
            <Footer />
          </>
        );
      }
      return (
        <>
        <AgentDetail />
        <Footer />
        </>
      );
    }
  }
}

export default observer(AgentComponent);
