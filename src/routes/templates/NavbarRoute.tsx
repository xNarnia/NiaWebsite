import { Component, useContext } from "react"
import { NavbarHiddenContext } from "../../app"
import React, { FC } from 'react';

interface NavbarRouteProp {
  Element: JSX.Element;
  BackgroundImage?: string;
}

const NavbarRoute: FC<NavbarRouteProp> = ({ Element, BackgroundImage }) => {
  const { navbarHidden, setNavbarHidden } = useContext(NavbarHiddenContext);
  setNavbarHidden(false);

  return (
    <>
      <div className="page" style={{backgroundImage: `url(${BackgroundImage})`}}>
        {Element}
      </div>
    </>
  );
};

export default NavbarRoute