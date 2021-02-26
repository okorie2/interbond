import React from "react";
import Scramble from "../../Assets/images/scrambles.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";
function Scrambles(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Scramble} alt="" className="interviewImage" />
          <h3>POLITICAL ASSOCIATIONS IN ABIA</h3>
          <p>
            If these last four groups merge to become one in future, according
            to the sources they are going to give the ANC in the state a good
            fight as the latter is seen as being centered round an individual.{" "}
          </p>
          <p>
            Moreover, both the NUC, PDA, CNC, NCN and, NPM have proclaimed
            themselves in Abia as being progressive, and may not quarrel much
            over nomenclature.
          </p>
          <p>
            Meanwhile, all the groups are mobilizing at the grassroots for the
            October 1 broadcast of General Sani Abacha which would unfold the
            expected transition program. Sources close to the NCN in abia
            indicated that a number of its members may already have set-up their
            independent machinery to contest the party’s gubernatorial seat.
          </p>
          <p>
            Among them are a Lagos based industrialist Chief Sony Nlewedim from
            Umuawa, Umuahia Urban and Chief Chidi Onwumere, former sole
            Administrator of the Modern Ceramics Industries limited; who hails
            from Olokoro, the same home with Prince Vincent Eze Oghlafor of the
            PDA who also has the same ambition.
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

export default Scrambles;
