import React, { useEffect, useState } from 'react';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavMenuLinks,
  NavBtn,
} from './NavbarElem';

const Navbar = ({ toggle }) => {
  //func to handle navbar color change
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/">ELIXR</NavLogo>
        {/* <MenuBars onClick={toggle} /> */}
        <MobileIcon onClick={toggle} scrollNav={scrollNav}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {menuData.map(item => {
            return (
              <NavItem key={item.key}>
                <NavMenuLinks to={item.link}>{item.title}</NavMenuLinks>
              </NavItem>
            );
          })}
        </NavMenu>
        <NavBtn>
          <Button to="/contact" primary="true">
            Contact Us
          </Button>
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
