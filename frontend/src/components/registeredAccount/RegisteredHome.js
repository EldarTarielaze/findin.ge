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
  const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
  `;

  const NavbarLeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const NavbarCenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ParagraphLinker = styled.p`
    font-family: "BPG Mrgvlovani Caps", sans-serif;
    font-weight: 700;
    cursor: pointer;
    margin-top: 5px;
    font-size: 14px;
    margin-left: 30px;
    color: #26262a;
    position: relative;
    transition: all 0.2s ease-in-out;
    &::after {
      content: "";
      background-color: #e67e22;
      width: 0;
      height: 4px;
      display: block;
      border-radius: 20px;
      position: absolute;
      bottom: -44.5px;
    }
    &:hover {
      margin-top: 3px !important;
      transition: all 0.2s ease;
    }
    &:hover::after {
      width: 100%;
      transition: all 0.2s ease-in-out;
    }
  `;

  const ButtonContentNav = styled.button`
    border: none;
    outline: none;
    border: 1px solid #e67e22;
    height: 40px;
    padding: 0 24px 0 16px;
    transition: all 0.1s ease;
    font-family: "BPG Mrgvlovani Caps", sans-serif;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 11px;
    padding-top: 3px;
    &:hover {
      background-color: #fad390;
    }
  `;

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
      <NavbarContainer>
        <NavbarLeftContainer>
          <Link to="/logged">
            <img
              src={Icon}
              alt="Logo"
              title="Logo"
              className="logoImage__navbar"
            />
          </Link>
          <div className="content__paragraphs">
            <ParagraphLinker>ჩემი გვერდი</ParagraphLinker>
            <Link to="/agent" className="agentComponent__paragraph">
              სააგენტოები
            </Link>
            <ParagraphLinker>დეველოპერები</ParagraphLinker>
          </div>
        </NavbarLeftContainer>
        <NavbarCenterContainer>
          <Link
            to="/add"
            className="btnAdd__class"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <AddCircleIcon className="iconAdd__Navbar" />
            დამატება
          </Link>
          <Tooltip title="Georgia">
            <IconButton aria-label="Georgia">
              <img
                src="https://www.myhome.ge/framework/templates/assets/img/flags/ka.svg"
                alt="GEO"
                title="GEO"
                className="contentGEO__img"
                style={{ width: "35px", cursor: "pointer" }}
              />
            </IconButton>
          </Tooltip>
          <Link
            to="/"
            className="btnAdd__class"
            style={{
              textDecoration: "none",
              color: "#000",
              marginLeft: "20px",
            }}
          >
            გასვლა
          </Link>
        </NavbarCenterContainer>
      </NavbarContainer>
      <hr
        style={{ border: "none", backgroundColor: "lightgray", height: "1px" }}
      />
      <Banner />
      <FullCard />
      <Developers />
      <PopularStreet />
      <Footer />
    </>
  );
};
export default Navbar;
