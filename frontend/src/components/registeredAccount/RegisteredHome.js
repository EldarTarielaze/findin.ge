import React, { useState, useEffect } from "react";
import "./RegisteredNavbar.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { Tooltip, IconButton } from "@material-ui/core";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import Icon from "./icon.png";
import Banner from "../banner/Banner";
import Footer from "../Footer/Footer";
import FullCard from "../Cards/FullCard";
import PopularStreet from "../Popular/PopularStreet";
import Developers from "../Developers/Developers";
import axios from "axios";
import AgentComponent from "../agentComponent/agentComponent";

const Navbar = () => {
  const [showLoginSystem, setShowLoginSystem] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        mail: mail,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          {
            setLoginStatus(response.data[0].email);
          }
        }
      });
  };

  return (
    <>
      <Banner />
      <FullCard />
      <Developers />
      <PopularStreet />
      <Footer />
    </>
  );
};
export default Navbar;
