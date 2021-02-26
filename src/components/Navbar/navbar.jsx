import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import EcoIcon from "@material-ui/icons/Eco";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import Title from "../home title/title";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="header homebg">
        <div>
          <EcoIcon className="logo title" />
          <Link to="/">
            <b className="title"> I N T E R B O N D</b>
          </Link>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option item" onClick={closeMobileMenu}>
              <Link to="/interview">INTERVIEWS</Link>
            </li>

            <li className="option item" onClick={closeMobileMenu}>
              <Link to="#">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseIcon className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <Title />
      </div>
    </>
  );
};
export default Navbar;
