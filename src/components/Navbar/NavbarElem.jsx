import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#cd853f' : 'transparent')};
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLink = css`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavLogo = styled(Link)`
  ${NavLink}
  font-style: italic;
  justify-self: flex-start;
  margin-left: 24px;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? '#fff' : '#cd853f')};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  height: 60px;
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
  height: 100%;
  padding: 0 1rem;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
