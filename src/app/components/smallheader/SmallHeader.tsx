import React, { cloneElement, useState } from "react";
import PropTypes from "prop-types";
import { AppBar, IconButton, useScrollTrigger } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ScrollToColor } from "../ScrollToColor";
import { MenuDrawer } from "../MenuDrawer";
import logoBlue from "../../assets/img/logo/logo-blue.png";
// import logoWhite from "../../assets/img/logo/logo-white.png";

interface SmallHeaderProps {
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

export const SmallHeader = ({ window }: SmallHeaderProps) => {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <>
      <ElevationScroll>
        {trigger ? (
          <ScrollToColor>
            <AppBar
              className="px-10 py-4"
              position="fixed"
              color="transparent"
              elevation={0}
            >
              <div className="flex justify-between items-center">
                <img src={logoBlue} className="w-16" alt="icon" />
                <div>
                  <MenuDrawer
                    open={openMenuDrawer}
                    toggleMenuDrawer={handleOpenMenuDrawer}
                  />
                  <IconButton onClick={handleOpenMenuDrawer}>
                    <MenuIcon className="mb-2 text-[#1C3B82]" />
                  </IconButton>
                </div>
              </div>
            </AppBar>
          </ScrollToColor>
        ) : (
          <ScrollToColor>
            <AppBar className="px-10 py-4" position="fixed" elevation={0}>
              <div className="flex justify-between items-center">
                <img src={logoBlue} className="w-16" alt="icon" />
                <div>
                  <MenuDrawer
                    open={openMenuDrawer}
                    toggleMenuDrawer={handleOpenMenuDrawer}
                  />
                  <IconButton onClick={handleOpenMenuDrawer}>
                    <MenuIcon className="mb-2 text-[#1C3B82]" />
                  </IconButton>
                </div>
              </div>
            </AppBar>
          </ScrollToColor>
        )}
      </ElevationScroll>
    </>
  );
};
