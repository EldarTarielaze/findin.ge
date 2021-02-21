import React from "react";
import Card from "./Card";
import styled from "styled-components";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import Carousel from "react-elastic-carousel";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./FullCard.css";

const FullCard = () => {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
  ];
  return (
    <>
      <div className="vipContentMainSection">
        <div className="vipContent__Startup">
          <svg
            class="startUp__icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
          </svg>
          <span className="vipContact__span" id="vipContact__id">
            VIP განცხადებები
          </span>
        </div>
      </div>
      <div className="contentCardingSystem__flexHave">
        <Carousel breakPoints={breakPoints}>
        <Card />
        </Carousel>
      </div>
    </>
  );
};
export default FullCard;
