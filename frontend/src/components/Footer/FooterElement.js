import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f1f2f5;
  border-top: 1px solid lightgray;
  margin-top: 50px;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  cursor: pointer;
  font-family: MarkGeoCaps;
  margin-bottom: 16px;
`;

export const FooterLink = styled.p`
  color: #000;
  text-decoration: none;
  font-family: MarkGeoCaps;
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-size: 12.5px;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110px;
  margin: 40px auto 0 auto;
`;

export const SecondFooter = styled.div`
  border-top: 1px solid lightgray;
  width: 800px;
`;

export const ParagraphFooter = styled.p`
font-family: MarkGeoCaps;
font-size: 13px;
  text-align: center;
  margin-top: 25px;
`;
