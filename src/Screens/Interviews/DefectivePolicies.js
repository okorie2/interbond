import React from "react";
import Defective from "../../Assets/images/defective policies.jpg";
import "../Interviews/interviews.css";
import Header from "../../components/Navbar/Header";
function DefectivePolicies(props) {
  return (
    <>
      <Header />
      <div className="newspapers">
        <img src={Defective} alt="" className="interviewImage" />
        <h2> Nlewedimmm decries defective policies</h2>
        <p>
          DEFECTIVE policies and lack of will on the part of the economic
          managers have been blamed for the non realisation of our
          industrialisation dreams. <br />
          Added to the above is the non-involvement of investors in policy
          formulation as it concerns the productive sub-sector of the economy.
        </p>
        <p>
          Chief Sunny Nlewidim, a foremost industrialist and chief. executive of
          Interbond Nigeria Limited stated this in a discussion on the state of
          the economy at the weekend. <br /> Chief Nlewedim took a swipe on the
          policy formulators who arrogate to themselves absolute knowledge of a
          terrain they are not practically engaged in This results in the
          formulation of text book policies that are a far cry from the
          realities on the ground and naturally, such policies are ineffective
          as the for• naturally, such policies are ineffective as the
          formulators are ill-informed", he stressed.
        </p>
        <p>
          {" "}
          As long as our industrialisation policies are formulated without due
          difference to the inputs from the Le actual investors, we would end
          drawing up polieies for the shell" and al chi, e.s. he fill-the;
          ..teued. '16,1 Nlewedim Mit:Arnett that in a situation cifPZ
          infrastructural base, capital flight, an escdisiage: that .1,c,
          tinfa,wrahl■ against the naira and an unsensitised market, no
          reasonable investor would 
        </p>
      </div>
    </>
  );
}

export default DefectivePolicies;
