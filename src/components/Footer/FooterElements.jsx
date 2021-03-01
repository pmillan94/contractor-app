import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #000d1a;
  padding-top: 2rem;
`;

export const FooterWrap = styled.div`
  /* background-color: pink; */
  padding: 48px;
  padding: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const PageText = styled(Link)`
  /* background-color: yellow; */
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  font-weight: bold;
  max-width: 28rem;
`;

export const FooterLinksWrap = styled.div`
  /* background-color: pink; */
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 14px;

  &:hover {
    color: #cd853f;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 300px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;
export const SocialIconLinks = styled.a`
  color: #cd853f;
  font-size: 28px;
`;
