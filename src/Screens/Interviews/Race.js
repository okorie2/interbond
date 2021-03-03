import React from "react";
import Races from "../../Assets/images/race.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";

const Race = () => {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Races} alt="" className="interviewImage" />,
          <h3>A RACE'S INCONSISTENCY </h3>
          <p>
            Could it be one of the uncertainties that has become the lot of a
            nation embroiled in inconsistency, intrigue, confusion and
            directionlessness? If not, how can one explain the conflicting
            signals from the supposed custodians of the Yoruba culture,
            tradition and by extension the barometer for measuring the people’s
            heartbeat.
          </p>
          <p>
            First it was a call for a total boycott of the just concluded
            election in the wards for representatives at the much talked about
            constitutional conference. Before a blink of an eyelid, just on the
            eve of the election, the drumbeat changed and the parrot sang a new
            tune compounding the confusion created by the initial call on the
            Yoruba people to jettison the election. It may not be surprising
            though, not to an avid watcher and follower of political
            developments in this country which predates independence in 1960.
            Right from the floor of the house at Lancaster during the 1954
            constitutional conference in London, through to the events preceding
            the independence of the country, up to the pre-civil war
            negotiations and most recently, the Yoruba people nay, their leaders
            have maintained a pattern whose consistent character is the level of
            inconsistency that has bestrode their path in making political
            decisions.
          </p>
          <p>
            This is not an attempt to denigrade a respectable race but if one
            can ask, why is it that Abiola has made more trips to Yoruba states
            to enlist their support than he has to other states? The answer is
            simple, others are guided by their moral convictions and their yes
            remains yes at all times. One of the primary problems which the
            Yoruba’s face and which to a large extent has distanced them from
            other tribes is the ease with which they break faith. How many of
            the apostles of June 12 from the North or East have changed their
            stand? That is principle epitomized. To all intents and purposes,
            where one obviously creates an impression of standing on quick sand
            in negotiations, then only the person`s mind can trust him.
          </p>
          <p>
            Though the traditional rulers in Yoruba land have been more
            political than their counterparts in the East and North overtime,
            the impasse created by June 12 has more than anything exposed the
            fact that they are not insulated from politics and to a large extent
            more politically inclined than their subjects. While other Nigerians
            outside the Yoruba enclave could read in-between lines and deduce
            that the old order we reigneth, the Yoruba’s have vainly
            propositioned a united front in whatever pronouncements they make.
            Since the annulment of the June 12 election by Babangida government,
            the main players in succeeding governments have been the Yoruba's to
            the utter amazement of the rest of the country.
          </p>
          <p>
            Or how can one explain the role played by Shonekan`s, the Sarumi`s,
            the Kuforiji Olubi`s, the Olashore`s, the Adelusi Adeluyi`s etc, in
            the making of the short-lived interim government. Even by extension,
            the Diyas, the Jakandes, the Babatopes, the Sam Alukos, the
            Onagoruwas and many others in firming up the position of Abacha
            regime. The rumor mills where even agog that Chief M.K.O Abiola
            endorsed the government of Abacha when, his apologists canvassed, he
            thought that Abacha would provide the safe ladder for him to climb
            to Aso Rock. The position of the Yoruba people is basically a lesson
            in irony and paradoxes but other Nigerians are not complaining not
            because the Injustice of the time is peculiar, but simply, because
            they have sympathy for the issues of the moment.
          </p>
          <p>
            What is happening now, given the unseriousness in the rank of the
            people who have consistently put the country on its toes for months,
            amounts to an unnecessary distraction and the earlier we open our
            eyes to the facts, the better for the rest of the country. There is
            no doubt that the Yoruba people are calling the shots in the present
            regime, yet, we have not been spared a moment by their tendentious
            distractions. People are beginning to feel that the Western press
            which is largely owned and controlled by the Yoruba people accounts
            for the big mention such lousy talks that are incoherent, punchless
            and purposeless are receiving. Is it not time we hear the last of
            the execution of game plans to upstage the status quo if something
            meaningful cannot be made out of it. It may not be long before some
            principled sympathizers from other parts of the country are
            inexplicably made scapegoats for the blunders of other people.
            Another Igbo wise saying holds that a sympathizer in a funeral does
            not weep more than the chief mourner.
          </p>
          <p>
            While all lovers of Justice would stand firm in ensuring that
            Justice is done to all men, the realities in Nigeria now demands
            those whose war we are waging should be at the forefront.
          </p>
          <p></p>
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
};

export default Race;
