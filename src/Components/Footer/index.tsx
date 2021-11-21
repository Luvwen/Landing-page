import React from "react";
import { Paragraph } from "../Navbar/style";
import {
  FooterContainer,
  FooterContainerLinks,
  FooterIconsContainer,
  FooterLink,
  FooterLinkImg,
  FooterLinks,
  FooterLogo,
  FooterTextContainer,
} from "./styles";

import Logo from "../Page/assets/logo.jpg";
import iconFacebook from "../Page/assets/icon-facebook.svg";
import iconTwitter from "../Page/assets/icon-twitter.svg";
import iconInstagram from "../Page/assets/icon-instagram.svg";

let url = "#";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo src={Logo} width="50px" height="50px" />
        <FooterContainerLinks>
          <FooterTextContainer>
            <Paragraph>
              <FooterLinks>FAQs</FooterLinks>
            </Paragraph>
            <Paragraph>
              <FooterLinks>Contact Us</FooterLinks>
            </Paragraph>
          </FooterTextContainer>
          <FooterTextContainer>
            <Paragraph>
              <FooterLinks>Privacy Policy</FooterLinks>
            </Paragraph>
            <Paragraph>
              <FooterLinks>Press Kit</FooterLinks>
            </Paragraph>
          </FooterTextContainer>
          <FooterTextContainer>
            <Paragraph>
              <FooterLinks>Install Guide</FooterLinks>
            </Paragraph>
          </FooterTextContainer>
        </FooterContainerLinks>
        <FooterIconsContainer>
          <FooterLink href={url}>
            <FooterLinkImg src={iconFacebook} />
          </FooterLink>
          <FooterLink href={url}>
            <FooterLinkImg src={iconTwitter} />
          </FooterLink>
          <FooterLink href={url}>
            <FooterLinkImg src={iconInstagram} />
          </FooterLink>
        </FooterIconsContainer>
      </FooterContainer>
    </>
  );
};
