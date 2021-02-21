import React from "react";
import "./Footer.css";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SecondFooter,
  ParagraphFooter,
} from "./FooterElement";

class Footer extends React.Component {
  render() {
    return (
      <>
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>ნავიგაცია</FooterLinkTitle>
                  <FooterLink to="/">დეველოპერები</FooterLink>
                  <FooterLink to="/">სააგენტოები</FooterLink>
                  <FooterLink to="/">განცხადებები</FooterLink>
                  <FooterLink to="/">შესვლა</FooterLink>
                  <FooterLink to="/">დამატება</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>მეტი</FooterLinkTitle>
                  <FooterLink to="/signin">დახმარება</FooterLink>
                  <FooterLink to="/signin">რეკლამა</FooterLink>
                  <FooterLink to="/signin">საიტის წესები</FooterLink>
                  <FooterLink to="/signin">კონტაქტი</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>ბინები</FooterLinkTitle>
                  <FooterLink to="/signin">ქირავდება</FooterLink>
                  <FooterLink to="/signin">იყიდება</FooterLink>
                  <FooterLink to="/signin">VIP განცხადებები</FooterLink>
                  <FooterLink to="/signin">გირაობა</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>ჩვენ შესახებ</FooterLinkTitle>
                  <FooterLink to="/signin">Instagram</FooterLink>
                  <FooterLink to="/signin">Facebook</FooterLink>
                  <FooterLink to="/signin">Youtube</FooterLink>
                  <FooterLink to="/signin">Linkedin</FooterLink>
                  <FooterLink to="/signin">Github</FooterLink>
                  <FooterLink to="/signin">Twitter</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SecondFooter>
              <ParagraphFooter>
                Facebook &#169; {new Date().getFullYear()} ყველა უფლება დაცულია
              </ParagraphFooter>
            </SecondFooter>
          </FooterWrap>
        </FooterContainer>
      </>
    );
  }
}
export default Footer;
