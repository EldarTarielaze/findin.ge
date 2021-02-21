import React from "react";
import "./SocialButton.css";

const SocialButton = () => {
  function actionToggle() {
    const actionTogg = document.querySelector(
      ".actionContainerForButtonSocial"
    );
    actionTogg.classList.toggle("activeForSocialNetworkBeans");
  }
  return (
    <>
      <div className="actionContainerForButtonSocial" onClick={actionToggle}>
        <span>+</span>
        <ul>
          <a href="https://facebook.com" className="twiA">
            <li>
              <img
                src="https://img.icons8.com/fluent/2x/facebook-new.png"
                alt="Facebook"
                title="Facebook"
                aria-label="Facebook"
                className="iconFluentContainerSocialNewtork imgSocial"
              />
              გამოგვყევი Facebook-ზე
            </li>
          </a>
          <a href="https://facebook.com" className="twiA">
            <li>
              <img
                src="https://img.icons8.com/nolan/2x/whatsapp.png"
                alt="Whatsapp"
                title="Whatsapp"
                aria-label="Whatsapp"
                className="iconFluentContainerSocialNewtork imgSocial"
              />
              გამოგვყევი Whatsapp-ზე
            </li>
          </a>
          <a href="https://facebook.com" className="twiA">
          <li>
              <img
                src="https://img.icons8.com/color/2x/viber.png"
                alt="Viber"
                title="Viber"
                aria-label="Viber"
                className="iconFluentContainerSocialNewtork imgSocial"
              />
              გამოგვყევი Viber-ზე
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};
export default SocialButton;