import { Component, useContext } from "react"
import { NavbarHiddenContext } from "../../app"
import React, { FC } from 'react';

interface NavbarRouteProp {
  Element: JSX.Element;
}

const NavbarRoute: FC<NavbarRouteProp> = ({ Element }) => {
  const { navbarHidden, setNavbarHidden } = useContext(NavbarHiddenContext);
  setNavbarHidden(false);

  return (
    <>
      {Element}
    </>
  );
};

export default NavbarRoute