import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrap,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  PageText,
  SocialIcons,
  SocialIconLinks,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <PageText>Let's Build Your Dream Home</PageText>
          <FooterLinksWrap>
            <FooterLinkItems>
              <FooterLink to="/">Contact Us</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Questions</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLink to="/">Offices</FooterLink>
              <FooterLink to="/">United States</FooterLink>
              <FooterLink to="/">Europe</FooterLink>
              <FooterLink to="/">Asia</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrap>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
