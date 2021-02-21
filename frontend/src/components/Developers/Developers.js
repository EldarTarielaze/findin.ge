import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import "./Developers.css";
import { Tooltip } from "@material-ui/core";

const Developers = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  return (
    <>
      <div className="content__paragraphDevelopers">
        <svg
          class="sponsorsDevelopers__icon"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"></path>
        </svg>
        <p className="paragraphSponrsors__tagP">დეველოპერები</p>
      </div>
      <div className="developersContent">
        <Carousel breakPoints={breakPoints}>
          <Tooltip
            title="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics"
            placement="top"
            arrow
          >
            <img
              src="https://www.futurmaster.com/wp-content/uploads/2016/12/Microsoft-Logo-PNG.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>

          <Tooltip
            title="Google, LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware."
            placement="top"
            arrow
          >
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="Yahoo! is an American web services provider headquartered in Sunnyvale, California, and owned by Verizon Media. The original Yahoo! company was founded by Jerry Yang and David Filo in January"
            placement="top"
            arrow
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Yahoo%21_%282019%29.svg/1200px-Yahoo%21_%282019%29.svg.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California."
            placement="top"
            arrow
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. "
            placement="top"
            arrow
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="Airbnb, Inc. is an American vacation rental online marketplace company based in San Francisco, California, United States. Airbnb offers arrangement for lodging, primarily homestays, or tourism experiences"
            placement="top"
            arrow
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, "
            placement="top"
            arrow
          >
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c528.png"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops and sells consumer electronics,"
            placement="top"
            arrow
          >
            <img
              src="https://lh3.googleusercontent.com/proxy/Z8OPXjq4HzyFqvXu8Kre_mydcCyY4NdVWjmmkGJmWeRA30cb-77D0YwCIf38rlOXJVBBdQ-0PKFPjbrNbLBTU-o4d_ZsrGoVju3C7_CnGkLh"
              alt="Developers Logo"
              className="developersLogo__content"
            />
          </Tooltip>
          <Tooltip
            title="Amazon.com, Inc., is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. "
            placement="top"
            arrow
          >
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG9.png"
              alt="Developes Logo"
              className="developersLogo__content"
            />
          </Tooltip>
        </Carousel>
      </div>
      <hr className="hrContent" />
    </>
  );
};
export default Developers;
