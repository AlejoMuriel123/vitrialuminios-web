import React, { ReactElement } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface ScrollToColorProps {
  threshold?: number;
  bgColorBefore?: string;
  bgColorAfter?: string;
  textColorBefore?: string;
  textColorAfter?: string;
  fadeIn?: string;
  fadeOut?: string;
  paddingBefore?: string;
  paddingAfter?: string;
  children: ReactElement;
  fontSizeBefore?: string;
  fontSizeAfter?: string;
  buttonBefore?: string;
  buttonAfter?: string;
  imageBefore?: string;
  window?: Window;
}

export default function ScrollToColor(props: ScrollToColorProps) {
  const {
    threshold = 0,
    bgColorBefore = "transparent",
    bgColorAfter = "white",
    textColorBefore = "white",
    textColorAfter = "black",
    fadeIn = "0.3s ease-in",
    fadeOut = "0.3s ease-out",
    paddingBefore = "1rem",
    paddingAfter = "0.9rem",
    fontSizeBefore = "40px",
    fontSizeAfter = "10px",
    children,
    ...other
  } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window : undefined,
  });

  return React.cloneElement(children, {
    style: {
      boxShadow: trigger ? "none" : "none",
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      transition: trigger ? fadeIn : fadeOut,
      fontSize: trigger ? fontSizeAfter : fontSizeBefore,
    },
    ...other,
  });
}
