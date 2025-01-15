import Sidenav from 'examples/Sidenav'
import React, { useState } from 'react'
import routes from 'routes'
import brand from "assets/images/logo-ct.png";
import { useSoftUIController, setMiniSidenav } from "context";

function index() {

const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);

    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
          setMiniSidenav(dispatch, false);
          setOnMouseEnter(true);
        }
      };
    
      // Close sidenav when mouse leave mini sidenav
      const handleOnMouseLeave = () => {
        if (onMouseEnter) {
          setMiniSidenav(dispatch, true);
          setOnMouseEnter(false);
        }
      };
  return (
    <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Soft UI Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
  )
}

export default index