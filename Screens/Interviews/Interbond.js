import React from "react";
import Interbond from "../../Assets/images/interbond.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";
function interbond(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Interbond} alt="" className="interviewImage" />
          <p>
            Chief Nlewedim said that when the company goes into production next
            year, prices of the products will go down drastically because of
            reduced cost of production since most of the raw materials will be
            sourced locally, like clay for ceramics in Umuahia.
          </p>
          <p>
            {" "}
            Among the items that will be produced are gold chandeliers, mirrors,
            fountains, gold plated switches, remote controlled dimmer switches,
            wall brackets, outdoor lightings, table lamps, sockets and bed
            lamps, all in beautiful eye-catching designs. He dismissed the
            probable stiffing oof the local market by large scale importation of
            its products saying “we are not going to produce anything below
            standard, So, high quality coupled with subsequent low prices will
            make buying the more expensive imported ones unattractive and
            unreasonable”. Interbond started operation in 1988 and has, within
            its short existence, made a mark with the introduction into the
            Nigerian market of good quality products which the general manager
            said are meant for people who appreciate beauty and who can afford
            to pay”.{" "}
          </p>
        </div>
        <div className="side-bar">
          <Sidenav />
        </div>{" "}
      </section>
      <button className="myButton">
        <Link to="/">
          <h3>home page</h3>
        </Link>
      </button>
    </>
  );
}

export default interbond;
