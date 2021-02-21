import React from "react";
import "./PopularStreet.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Carousel from "react-elastic-carousel";

const PopularStreet = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  return (
    <>
      <div className="popularstreet__btm">
        <svg
          class="popularStreet__Icon"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        </svg>
        <span className="popularStreet__Batumi">
          ბათუმის პოპულარული ადგილები
        </span>
      </div>
      <div className="developers">
        <Carousel breakPoints={breakPoints}>
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src="https://georgiantour.com/wp-content/uploads/2016/05/georgia-and-travel-batumi.jpg" />
              </div>
              <div className="content">
                <div>
                  <h2>ერას მოედანი</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src="https://georgiantravelguide.com/storage/files/ardaganis-tba-batumi-ardagani-lake-batumi-3.jpg" />
              </div>
              <div className="content">
                <div>
                  <h2>ადგილს არვიცი რაქვია</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src="https://cache.marriott.com/marriottassets/marriott/BUSSI/bussi-exterior-7315-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" />
              </div>
              <div className="content">
                <div>
                  <h2>ადგილს არვიცი რაქვია</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src="https://georgiantour.com/wp-content/uploads/2016/05/georgia-and-travel-batumi.jpg" />
              </div>
              <div className="content">
                <div>
                  <h2>ერას მოედანი</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src="https://georgiantravelguide.com/storage/files/ardaganis-tba-batumi-ardagani-lake-batumi-3.jpg" />
              </div>
              <div className="content">
                <div>
                  <h2>ადგილს არვიცი რაქვია</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src="https://cache.marriott.com/marriottassets/marriott/BUSSI/bussi-exterior-7315-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" />
              </div>
              <div className="content">
                <div>
                  <h2>ადგილს არვიცი რაქვია</h2>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default PopularStreet;
