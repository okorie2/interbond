import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidenav(props) {
  const [sidenav, setSidenav] = useState(false);

  const toggleNav = () => {
    setSidenav(!sidenav);
  };
  return (
    <>
      <div>
        <div id="mySidenav" className="sidenav">
          <a
            href="javascript:void(0)"
            className={sidenav ? " sidenav closebtn " : " "}
            onclick={toggleNav}
          >
            x
          </a>
        </div>

        <span
          style={{ fontSize: 30, cursor: "pointer" }}
          id="menu"
          className={sidenav ? "openav" : " sidenav openav "}
          onClick={toggleNav}
        >
          {sidenav ? (
            <p>see more interviews...</p>
          ) : (
            <div className="interview-menu">
              <p>X</p>
              <Link to="/interbond"> Interbond</Link>
              <Link to="/defectivepolicies"> Defective Policies</Link>
              <Link to="/Interim">Interim</Link>
              <Link to="/industrialist"> Industrialist</Link>
              <Link to="/reaping">Reaping</Link>
              <Link to="/taskfinance"> Task Finance</Link>
              <Link to="/visionary"> Visionary</Link>
            </div>
          )}
        </span>
      </div>
    </>
  );
}

export default Sidenav;
