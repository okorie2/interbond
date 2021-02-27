import React from "react";
import Defective from "../../Assets/images/defective policies.jpg";
import "../Interviews/interviews.css";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";

function DefectivePolicies(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <h2> Nlewedim decries defective policies </h2>{" "}
          <img src={Defective} alt="" className="interviewImage" />
          <p>
            DEFECTIVE policies and lack of will on the part of the economic
            managers have been blamed for the non realisation of our
            industrialisation dreams.Added to the above is the non - involvement
            of investors in policy formulation as it concerns the productive sub
            - sector of the economy.{" "}
          </p>{" "}
          <p>
            Chief Sunny Nlewedim, a foremost industrialist and chief.executive
            of Interbond Nigeria Limited stated this in a discussion on the
            state of the economy at the weekend. <br /> Chief Nlewedim took a
            swipe on the policy formulators who arrogate to themselves absolute
            knowledge of a terrain they are not practically engaged in This
            results in the formulation of text book policies that are a far cry
            from the realities on the ground and naturally, such policies are
            ineffective as the for• naturally, such policies are ineffective as
            the formulators are ill - informed ", he stressed.{" "}
          </p>{" "}
          <p>
            {" "}
            As long as our industrialization policies are formulated without due
            difference to the inputs from the actual investors, we would end
            drawing up policies for the shelves and archives, he further argued.
            Chief Nlewedim reasoned that in a situation of poor infastructural
            base, capital fight, an exchange rate that skews unfavourably
            against the naira and an unsensitised market, no reasonable investor
            would put down money in any manufacturing business in nigeria.
          </p>{" "}
        </div>{" "}
        <div className="side-bar">
          <Sidenav />
        </div>{" "}
      </section>{" "}
      <button className="myButton">
        <Link to="/">
          <h3>home page</h3>
        </Link>
      </button>
    </>
  );
}

export default DefectivePolicies;
