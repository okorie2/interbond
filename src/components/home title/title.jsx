import React, { useEffect } from "react";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import "./title.css";
const Title = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hometopic" data-aos="flip-right">
        <h1>
        CHIEF SONNY NLEWEDIM <br />
        <br/>
          <div style={{color: "#fc9288"}}>INTERBOND FINANCE <br/>INTERBOND INDUSTRIES</div>
        </h1>
        <button className="myButton">
          <h3>ABOUT US</h3>
        </button>
      </div>
    </>
  );
};
export default Title;
