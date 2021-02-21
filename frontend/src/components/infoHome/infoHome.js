import React, { Component, useState } from "react";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { Tooltip, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import TodayIcon from "@material-ui/icons/Today";
import Icon from "./icon.png";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./infoHome.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CallIcon from "@material-ui/icons/Call";

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
  text-align: center;
  font-weight: 700;
  font-size: 11px;
  padding-top: 3px;
  &:hover {
    background-color: #fad390;
  }
`;

const ConnectButtonContent = styled.button`
  border: none;
  outline: none;
  height: 40px;
  border: 1px solid #e67e22;
  margin-left: 20px;
  padding: 0 24px 0 16px;
  transition: all 0.1s ease;
  font-family: "BPG Mrgvlovani Caps", sans-serif;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  font-size: 11px;
  padding-top: 3px;
  &:hover {
    background-color: #fad390;
  }
`;
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "15px",
    position: "relative",
    border: "1px solid #18a745",
  },
}))(Tooltip);
const InfoHome = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const onClickFunctionToShow = () => {
    setShowMoreInfo((google) => !google);
  };
  return (
    <>
      <NavbarContainer>
        <NavbarLeftContainer>
          <Link to="/">
            <img
              src={Icon}
              alt="Logo"
              title="Logo"
              className="logoImage__navbar"
            />
          </Link>
          <div className="content__paragraphs">
            <ParagraphLinker>სააგენტოები</ParagraphLinker>
            <ParagraphLinker>დეველოპერები</ParagraphLinker>
          </div>
        </NavbarLeftContainer>
        <NavbarCenterContainer>
          <ButtonContentNav>
            <AddCircleIcon className="iconAdd__Navbar" />
            დამატება
          </ButtonContentNav>
          <ConnectButtonContent style={{ marginRight: "20px" }}>
            <PersonIcon />
            შესვლა
          </ConnectButtonContent>
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
        </NavbarCenterContainer>
      </NavbarContainer>
      <hr
        style={{ border: "none", backgroundColor: "lightgray", height: "1px" }}
      />
      {/* Content For Users (Navbar down) */}
      <div className="contentForImageZoom">
        <div className="imgContainerForLookUsers">
          <img
            src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519"
            alt="Image For House"
            title="Image For House"
            className="imageClass__house"
          />
        </div>
        <div className="mainContainerForDisplayCenter">
          <div className="contentParagraphTitle__house">
            <h1>ქირავდება დღიურად ახალ აშენებული ბინა თბილისში</h1>
            <div className="contentInformationSide">
              <span className="containerCalendarHouse__class">
                <TodayIcon className="todayIconHouse__class mtsd" />
                დღეს 02:16
              </span>
              <span className="viewContainerForUp__class">
                <VisibilityIcon className="mtsd" />
                5800
              </span>
              <span className="idContainerForUP">ID: 126421</span>
            </div>
            <div className="mobilePhoneUserInformation__houseClass">
              <span className="callIcon__mobileHouseClass">
                <CallIcon className="wht" />
                <div className="paragraph__containerDirection">
                  <p>+995 555 55* ***</p>
                  <p>ნომრის ნახვა</p>
                </div>
              </span>
            </div>
            <div className="contentBigBorderForDesign">
              <div className="infohouse__classhs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="contentSVG__rooms"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M2 30v-2h2v2zm12-2H6v-2H4V6h2V4h20v2h2v8h2V6h2V0h-6v2H6V0H0v6h2v20H0v6h6v-2h8zM2 4V2h2v2zm28-2v2h-2V2z"></path>
                      <path d="M22 12h4v2h-4zm-10 6h2v4h-2zm0 6h2v4h-2zm4 4h4v2h-4zm6 0h4v2h-4zm6-6h2v4h-2zM16 12h4v2h-4zm12 16h2v2h-2zm0-12h2v4h-2zm-16-4h2v4h-2z"></path>
                    </g>
                  </g>
                </svg>
                <div className="directionContent__infoHouse">
                  <p>70.00 მ²</p>
                  <p className="roomF">2 ოთახი</p>
                </div>
              </div>
              <div className="contentChairMan__classHouse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 12.97"
                  className="contentSVG__rooms"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M15 4.66V1.59A1.59 1.59 0 0 0 13.41 0H3.58A1.58 1.58 0 0 0 2 1.58v3.08a2.21 2.21 0 0 0-2 2.15v2.1a2.3 2.3 0 0 0 2 2.28v1.28a.5.5 0 1 0 1 0V11h11v1.46a.5.5 0 1 0 1 0v-1.25a2.27 2.27 0 0 0 2-2.25V6.81a2.21 2.21 0 0 0-2-2.15zM3.58 1h9.83a.58.58 0 0 1 .58.58V5H13V2.69a.69.69 0 0 0-.69-.69H9.69a.69.69 0 0 0-.69.69V5H8V2.69A.69.69 0 0 0 7.31 2H4.69a.69.69 0 0 0-.69.69V5H3V1.58A.58.58 0 0 1 3.58 1zM12 5h-2V3h2zM7 5H5V3h2zm7.83 5H2.17A1.17 1.17 0 0 1 1 8.83V7.17A1.17 1.17 0 0 1 2.17 6h12.66A1.17 1.17 0 0 1 16 7.17v1.66A1.17 1.17 0 0 1 14.83 10z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
                <div className="contentDirection__forChair">
                  <p>1</p>
                  <p className="roomF">საძინებელი</p>
                </div>
              </div>
              <Tooltip
                title="სართული 1, სართულები სულ: 2"
                placement="top-start"
                arrow
              >
                <div className="sartulebiHouse__contentClass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    className="contentSVG__rooms"
                  >
                    <g data-name="Layer 2">
                      <path
                        d="M9 0v3H6v3H3v3H0v5h14V0zm4 13H1v-3h3V7h3V4h3V1h3z"
                        data-name="Layer 1"
                      ></path>
                    </g>
                  </svg>
                  <div className="contentDirection__Sartulebi">
                    <p>1 / 2</p>
                    <p className="roomF">სართული</p>
                  </div>
                </div>
              </Tooltip>
            </div>
            <div className="descriptionContent__classHome">
              <span>აღწერა</span>
              <p className="paragraphComment__houseClass">
                ქირავდება ბინა ყოველდღიურად კარგი გარემო პირობები კარგი ავეჯით
                ახალ აშენებულია
              </p>
            </div>
            <div className="sivrceContentInfo__homeClass">
              <h1 className="infoSivrce__contentHomeClass">სივრცე</h1>
              <div className="contentSivrcisInfo__houseClass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="contInfoSVG"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M16 3V0h-3v1H3V0H0v3h1v10H0v3h3v-1h10v1h3v-3h-1V3zM1 15v-1h1v1zM14 3v10h-1v1H3v-1H2V3h1V2h10v1zM1 2V1h1v1zm14-1v1h-1V1zm-1 14v-1h1v1z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
                <span className="spanInfos">ახალი გარემონტებული</span>
              </div>
              <div className="contentStandartInfos__homeClass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="contInfoSVG"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M16 3V0h-3v1H3V0H0v3h1v10H0v3h3v-1h10v1h3v-3h-1V3zM1 15v-1h1v1zM14 3v10h-1v1H3v-1H2V3h1V2h10v1zM1 2V1h1v1zm14-1v1h-1V1zm-1 14v-1h1v1z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
                <span className="spanInfos mbot">არასტანდარტული</span>
              </div>
              <div className="sadzinebeliInfos__homeClass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 12.97"
                  className="contInfoSVG"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M15 4.66V1.59A1.59 1.59 0 0 0 13.41 0H3.58A1.58 1.58 0 0 0 2 1.58v3.08a2.21 2.21 0 0 0-2 2.15v2.1a2.3 2.3 0 0 0 2 2.28v1.28a.5.5 0 1 0 1 0V11h11v1.46a.5.5 0 1 0 1 0v-1.25a2.27 2.27 0 0 0 2-2.25V6.81a2.21 2.21 0 0 0-2-2.15zM3.58 1h9.83a.58.58 0 0 1 .58.58V5H13V2.69a.69.69 0 0 0-.69-.69H9.69a.69.69 0 0 0-.69.69V5H8V2.69A.69.69 0 0 0 7.31 2H4.69a.69.69 0 0 0-.69.69V5H3V1.58A.58.58 0 0 1 3.58 1zM12 5h-2V3h2zM7 5H5V3h2zm7.83 5H2.17A1.17 1.17 0 0 1 1 8.83V7.17A1.17 1.17 0 0 1 2.17 6h12.66A1.17 1.17 0 0 1 16 7.17v1.66A1.17 1.17 0 0 1 14.83 10z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
                <span className="spanInfos">საძინებელი 1</span>
              </div>
              <div className="aivaniInfoContent__homeClass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 18"
                  className="contInfoSVG"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M0 18v-1h1v-2H0v-3h1V9H0V8h2V0h13v8h2v1h-1v3h1v3h-1v2h1v1zM3 1v7h6V1zm11 7V1h-4v7zM2 17h4v-2H5v-3h1V9H2v3h1v3H2zm12-2v-3h1V9h-4v3h1v3h-1v2h4v-2zM7 9v3h1v3H7v2h3v-2H9v-3h1V9zm-6 4v1h1v-1zm5 0v1h1v-1zm4 0v1h1v-1zm5 1h1v-1h-1z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
                <span className="spanInfos">აივანი 60 მ²</span>
              </div>
              <div className="contentVeranda__homeClass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="contInfoSVG"
                >
                  <g>
                    <path d="M15 1v14H1V1h14m1-1H0v16h16V0z"></path>
                    <path
                      class="cls-2"
                      d="M3.959 11.374l7.41-7.41.63.63-7.41 7.41z"
                    ></path>
                    <path
                      class="cls-2"
                      d="M3.959 4.586l.63-.63 7.41 7.411-.63.63z"
                    ></path>
                  </g>
                </svg>
                <span className="spanInfos mbqw">ვერანდა</span>
              </div>
              <div className="lojiContent__homeClass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="contInfoSVG"
                >
                  <g>
                    <path d="M15 1v14H1V1h14m1-1H0v16h16V0z"></path>
                    <path
                      class="cls-2"
                      d="M3.959 11.374l7.41-7.41.63.63-7.41 7.41z"
                    ></path>
                    <path
                      class="cls-2"
                      d="M3.959 4.586l.63-.63 7.41 7.411-.63.63z"
                    ></path>
                  </g>
                </svg>
                <span className="spanInfos mbqw">ლოჯი</span>
              </div>
              {showMoreInfo ? (
                <div className="contentBigInfo__homeClassContentUpload">
                  <div
                    className="sveliWertiliContent__homeClass"
                    id="sveliWertili"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18.01 18.25"
                      className="contInfoSVG"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path d="M9.51,4.28a.5.5,0,1,0,.53.5A.52.52,0,0,0,9.51,4.28ZM12,6.63a.72.72,0,1,0,.76.72A.74.74,0,0,0,12,6.63Zm0,.95a.23.23,0,1,1,.24-.23A.24.24,0,0,1,12,7.58ZM8.37,7.42A.65.65,0,1,0,9,8.07.67.67,0,0,0,8.37,7.42Zm0,.85a.21.21,0,1,1,.22-.21A.21.21,0,0,1,8.37,8.27ZM4,7.53V6.37c.19-.32-.09-.58-.42-.58A.55.55,0,0,0,3,6.37V7.53a.55.55,0,0,0,.58.58C3.92,8.11,4.19,7.85,4,7.53ZM5.43,5.72c-.34,0-.62.26-.42.59V6.9c-.19.33.08.59.42.59A.55.55,0,0,0,6,6.9V6.31A.55.55,0,0,0,5.43,5.72ZM4.81,8.08A1,1,0,0,0,4,8.67v.59a1,1,0,0,0,.81.59c.34,0,.62-.26.19-.59V8.67C5.43,8.34,5.15,8.08,4.81,8.08Z"></path>
                          <path d="M1,9.18V6.48c0-1.73,0-4.62.73-5.37A.46.46,0,0,1,2.07,1c.34,0,1.32,0,1.47,1.83A2.15,2.15,0,0,0,2,4.25H5.88A2.19,2.19,0,0,0,4.54,2.85C4.4.41,3,0,2.07,0A1.48,1.48,0,0,0,1,.43c-1,1-1,3.31-1,6.06v3.68a7.07,7.07,0,0,0,6,7v1.09H7v-1h4v1h1V17.16a7.08,7.08,0,0,0,6-7V9.25Zm9.73,7.06H7.31a6.17,6.17,0,0,1-6.32-6H17.05A6.17,6.17,0,0,1,10.73,16.25Z"></path>
                        </g>
                      </g>
                    </svg>
                    <span className="spanInfos">სველი წერტილი +3</span>
                  </div>
                  <div className="gatbobaClass__homeContent" id="gatbobaID">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11.99 18"
                      className="contInfoSVG"
                    >
                      <g data-name="Layer 2">
                        <path
                          d="M11.49 18H1.64a.5.5 0 0 1 0-1h9.84a.5.5 0 0 1 0 1zm-3.04-1.57h-.16c-.5-.17-.66-.25-.76-.45a.51.51 0 0 1 0-.39 5 5 0 0 0-1.06-4.86 4.94 4.94 0 0 0-1.16-1c1.21 1.54 1.18 3.91.88 5.86a.5.5 0 0 1-.29.38 4.56 4.56 0 0 1-.89.2.5.5 0 0 1-.56-.41A5 5 0 0 0 3.08 14C1.7 12.66-.19 10.76 0 8.1.2 5.6 2.19 3 6.08.1a.5.5 0 0 1 .77.56C5.75 4 7.38 5.9 9 7.7c1.88 2.15 3.83 4.38-.15 8.57a.5.5 0 0 1-.4.16zM5.56 1.76C2.69 4.09 1.16 6.25 1 8.18c-.15 2.2 1.48 3.82 2.79 5.15A8 8 0 0 1 5.23 15c.41-3-.22-4.91-1.85-5.59a.58.58 0 0 1-.44-.59c0-.4.39-.46.76-.52h.1a4.11 4.11 0 0 1 3.41 1.73 6.13 6.13 0 0 1 1.48 4.85c2.56-3.06 1.27-4.55-.48-6.55-1.4-1.57-3.09-3.5-2.65-6.57z"
                          data-name="Layer 1"
                        ></path>
                      </g>
                    </svg>
                    <span className="spanInfos">ცენტრალური გათბობა</span>
                  </div>
                  <div className="parkingPlace__classHome">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.9 17.9"
                      className="contInfoSVG"
                    >
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <path d="M9 17.9a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm0-17A8.06 8.06 0 1 0 17 9 8.06 8.06 0 0 0 9 .89z"></path>
                          <path d="M9.36 5a2.61 2.61 0 0 1 2.7 2.5 2.61 2.61 0 0 1-2.7 2.5H8v3H7V5h2.36m0-1H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h.4a3.61 3.61 0 0 0 3.7-3.5A3.61 3.61 0 0 0 9.36 4z"></path>
                          <path d="M7.97 6.95h2v1h-2z"></path>
                        </g>
                      </g>
                    </svg>
                    <span className="spanInfos">პარკინგი</span>
                  </div>
                  <div className="satavsoContentInformation__homeClass">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="contInfoSVG"
                    >
                      <g>
                        <path d="M15 1v14H1V1h14m1-1H0v16h16V0z"></path>
                        <path
                          class="cls-2"
                          d="M3.959 11.374l7.41-7.41.63.63-7.41 7.41z"
                        ></path>
                        <path
                          class="cls-2"
                          d="M3.959 4.586l.63-.63 7.41 7.411-.63.63z"
                        ></path>
                      </g>
                    </svg>
                    <span className="spanInfos mbqw">სათავსო</span>
                  </div>
                </div>
              ) : null}
              <div className="openCloseIcon__homeClass">
                <span
                  className="spanInfos sqa"
                  id="onCl"
                  onClick={onClickFunctionToShow}
                >
                  მეტის ნახვა
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15.71 7.86"
                  className="contInfoSVG dqsa"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M15.71 1.12a1.12 1.12 0 0 1-.4.86L8.58 7.6a1.12 1.12 0 0 1-1.44 0L.4 2A1.12 1.12 0 0 1 1.84.26l6 5 6-5a1.12 1.12 0 0 1 1.84.86z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <aside className="asideContentFunction__house">
            <p className="paragraphPrice__house">50 $</p>
            <hr className="hr__contentHouse" />
            <div className="contentFartiHouse__class">
              <span className="spanFartiHouse__class">ფართი: 90 მ²</span>
            </div>
            <hr className="hr__contentHouse" />
            <div className="daukavshirditUP__house">
              <div className="contentForInformationHours">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21.44 24.71"
                  className="svgIcon--root"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M15 14.72h-4.25a.67.67 0 0 1-.66-.67V8.53a.66.66 0 1 1 1.32 0v4.85H15a.67.67 0 0 1 0 1.35zM12.71 1.69H8.33A.84.84 0 0 1 7.5.84.84.84 0 0 1 8.33 0h4.38a.84.84 0 0 1 .83.84.84.84 0 0 1-.83.85zM20.78 7a.64.64 0 0 1-.46-.2l-2.25-2.29a.66.66 0 0 1 0-.94.63.63 0 0 1 .92 0l2.24 2.29a.66.66 0 0 1 0 .94.65.65 0 0 1-.45.2z"></path>
                      <path d="M10.52 24.71A10.51 10.51 0 1 1 21 14.2a10.52 10.52 0 0 1-10.48 10.51zm0-19.65a9.15 9.15 0 1 0 9.16 9.15 9.16 9.16 0 0 0-9.16-9.16z"></path>
                    </g>
                  </g>
                </svg>{" "}
                <span className="spanForConnectUP__house">
                  დაუკავშირდით მალე 24 საათში ნანახია 1500 ჯერ
                </span>
              </div>
            </div>
            <div className="contentIconsParagraphsHouseContent">
              <div className="safeHouse__content">
                <LightTooltip
                  title="ბინის დაზღვევა აგინაზღაურებს გაუთვალისწინებელ ხარჯებს იმ შემთხვევაში, თუ შენი ბინის რემონტი, ავეჯი ან საყოფაცხოვრებო ტექნიკა დაზიანდება."
                  placement="top-start"
                  arrow
                >
                  <span>
                    <i class="fas fa-house-user col"></i>
                    <p className="houseSafety__class">დააზღვიე ბინა</p>
                  </span>
                </LightTooltip>
              </div>
            </div>
            <div className="saveContent__houseClass">
              <span className="mainSpanContainer__homeClass">
                <FavoriteIcon className="heartIcon__homeClass" />
                <p className="saveParagraph__homeClass">შენახვა</p>
              </span>
              <span className="mainSpanContainer__homeClass">
                <i class="fas fa-flag heartIcon__homeClass"></i>
                <p className="saveParagraph__homeClass mto">გასაჩივრება</p>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
export default InfoHome;
