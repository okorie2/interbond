import React from "react";
import Interims from "../../Assets/images/interim.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
function Interim(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Interims} alt="" className="interviewImage" />
          <h3>DEADLINE 1993 •Chief Sonny Nlewedum </h3>
          <p>
            NIGERIANS, ever gripped by the fear of a long-lasting political
            crisis, perhaps of unimaginable magnitude, may have heaved a sigh of
            relief with government acceding to the two political parties' choice
            of an interim national government. issue.
          </p>
          <p>
            The Interim government option was earlier floated by government
            together with the dissolution of all elected structures. But the
            political parties accepted it in principle rejecting the attendant
            dissolution. In turn, the government rejected their modification,
            arguing that the parties ought to accept it wholesale. For according
            to it, the only way such a government could operate effectively was
            through the dissolution of all democratic structures
          </p>
          <p>
            But as the crisis raged, the parties once again went into closed
            decisions of their elected representative- party leaders who
            recommended the option. More also, when the option is seen as a
            compromise between government’s position and the different
            posturing's of the two parties on the issue.
          </p>
          <p>
            The government’s acceptance came soon after assurance by president
            Ibrahim Babangida that solution to the crisis will soon be found.
            What legitimacy or credibility will it command? The answers provided
            by observers are as varied as the posers themselves. Lagos-based
            businessman, Prince Obinna Okwuaka would want neutral person to
            mid-wife th interim national government.
          </p>
          <p>
            Although he would want the arrangement to be predicted on chief
            Abiola as an equation given that his name has become the lingering
            issue since June 12, Prince Okwuaka, however, remarked that is an
            SDP senator “legitimacy is not a one-way traffic- it can be achieved
            structurally, textually or socially and what matters now is that
            first, the two parties have agreed, secondly government concurs and
            majority of the elites accepting too”. Such legitimacy may also be
            attained by mobilizing the entire citizenry, and with all others,
            there is bound to be an international acceptance of legitimacy, he
            further said.
          </p>
          <p>
            {" "}
            The constitutional provision which makes it mandatory that the
            senate president be made to function as the leader of such
            arrangement does not yet arise.{" "}
          </p>
        </div>
        <div className="side-bar">
          <Sidenav />
        </div>{" "}
      </section>
    </>
  );
}

export default Interim;
