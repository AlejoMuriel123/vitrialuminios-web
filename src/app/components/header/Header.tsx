import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { AppBar, useScrollTrigger } from "@mui/material";
import { ScrollToColor } from "../ScrollToColor";
import logoBlue from "../../assets/img/logo/logo-blue.png";
import logoWhite from "../../assets/img/logo/logo-white.png";

interface HeaderProps {
  window?: () => Window;
}

function ElevationScroll(props: {
  children: React.ReactElement;
  window?: () => Window;
}) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const Header = (props: HeaderProps) => {
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <>
      {trigger ? (
        <ScrollToColor>
          <AppBar
            className="px-8 sm:px-10 md:px-20 bg-[#63a5d4]"
            position="fixed"
            color="transparent"
          >
            <div className="flex justify-between items-center">
              <a className="" href="/">
                <img className="w-20" src={logoBlue} alt="logo" />
              </a>
              <div className="flex justify-center items-center">
                <a
                  className="text-black hover:text-[#63a5d4] px-4 py-2 mx-2 rounded text-lg transition duration-300 ease-in-out"
                  href="#home"
                >
                  Inicio
                </a>
                <a
                  className="text-black hover:text-[#63a5d4] px-4 py-2 mx-2 rounded text-lg transition duration-300 ease-in-out"
                  href="#about"
                >
                  Nosotros
                </a>
                <a
                  className="text-black hover:text-[#63a5d4] px-4 py-2 mx-2 rounded text-lg transition duration-300 ease-in-out"
                  href="#products"
                >
                  Productos
                </a>
              </div>
            </div>
          </AppBar>
        </ScrollToColor>
      ) : (
        <ScrollToColor>
          <AppBar
            className="px-8 sm:px-10 md:px-20 py-8 bg-trasnparent text-white"
            position="fixed"
            color="transparent"
            elevation={0}
          >
            <div className="flex justify-between items-center">
              <a className="text-2xl" href="/">
                <img className="w-28" src={logoWhite} alt="logo" />
              </a>
              <div className="flex justify-center items-center">
                <a
                  className="text-white hover:text-[#63a5d4] px-4 py-2 mx-2 rounded text-lg transition duration-300 ease-in-out"
                  href="#home"
                >
                  Inicio
                </a>
                <a
                  className="text-white hover:text-[#63a5d4] px-4 py-2 mx-2 rounded text-lg transition duration-300 ease-in-out"
                  href="#about"
                >
                  Nosotros
                </a>
                <a
                  className="text-white hover:text-[#63a5d4] px-4 py-2 mx-2 rounded text-lg transition duration-300 ease-in-out"
                  href="#products"
                >
                  Productos
                </a>
              </div>
            </div>
          </AppBar>
        </ScrollToColor>
      )}
    </>
  );
};
