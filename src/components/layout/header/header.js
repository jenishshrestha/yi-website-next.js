import { React, Fragment } from "react";
import Nav from "./nav";
// import { isEmpty } from "lodash";

const Header = ({ primaryMenus, siteLogo }) => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <Nav headerMenus={primaryMenus} siteLogo={siteLogo} />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
