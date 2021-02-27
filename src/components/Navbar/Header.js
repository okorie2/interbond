import React, { useState } from "react";
import EcoIcon from "@material-ui/icons/Eco";
import { Link } from "react-router-dom";
import "../../components/Navbar/header.css";
function Header(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="checking">
      <div className="header-main">
        <EcoIcon className="logo title" />
        <Link to="/">
          <b className="title"> I N T E R B O N D</b>
        </Link>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option item" onClick={closeMobileMenu}>
            <Link to="/interview">INTERVIEWS</Link>
          </li>
          <li className="option item" onClick={closeMobileMenu}>
            <Link to="/interbondindustries">INTERBOND INDUSTRIES</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
