import React from "react";
import "./contentCardsInfo.css";

const ContentCardsInfo = () => {
  return (
    <>
      <div className="contentCardsInfo__app">
        <div className="firstContainer__CardsInfo">
          <img
            src="https://img.icons8.com/bubbles/2x/home-page.png"
            alt="Home Icon"
            title="Home Icon"
            aria-label="Home Icon"
            className="iconHome__toCardInfo"
          />
          <span className="spanCard__infoContent__contentCards">
            განცხადებები
          </span>
        </div>
        <div className="secondContainer__CardsInfo">
          <img
            src="https://img.icons8.com/plasticine/2x/service.png"
            alt="Service Image"
            title="Service Image"
            aria-label="Service Image"
            className="serviceImage__containerContentToCardInfo"
          />
          <span className="serviceContainer__divCardsInfo">სერვისები</span>
        </div>
        <div className="thirdContainer__cardsInfo">
          <img
            src="https://img.icons8.com/emoji/2x/rocket-emji.png"
            alt="Rocket Image"
            title="Rocket Image"
            aria-label="Rocket Image"
            className="rocketImage__containerCardsInfo"
          />
          <span className="spanCard__infoContent__toRocketParagraph">
            დეველოპერები
          </span>
        </div>
        <a href="/agent" style={{ textDecoration: "none" }}>
          <div className="fourContainer__cardsInfo">
            <img
              src="https://img.icons8.com/bubbles/2x/id-business-man-with-beard.png"
              alt="Agent Image"
              title="Agent Image"
              aria-label="Agent Image"
              className="agentImage__containerforCardsInfo"
            />
           <a href="/agent" style={{textDecoration: "none"}}><span className="spanAgentCompanies__forGuysSpan">სააგენტოები</span></a> 
          </div>
        </a>
      </div>
    </>
  );
};
export default ContentCardsInfo;
