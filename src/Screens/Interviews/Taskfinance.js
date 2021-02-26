import React from "react";
import Taskfinances from "../../Assets/images/taskfinance.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
function Taskfinance(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Taskfinances} alt="" className="interviewImage" />
          <p>
            Finance institutions have been urged to fund projects that will
            accelerate the desired industrial take off the country. 
          </p>
          <p>
            Abia state Governor, Dr Ogbonnaya Onu made the plea in Umuahia on
            Tuesday at the commissioning of the head office complex of the
            inter-bond finance and securities limited (IFS). He was represented
            at the formal opening of the indigenous firm by his deputy, Dr Chima
            Nwafor. The governor said that funding of such projects can no
            longer be left to the conventioned banks governments and its
            agencies
          </p>
          <p>
            He noted, though the country has abundant skilled man power for
            industrial takeoff, what was needed is the capital resources and
            monetization processes to harness the available human capabilities.
            Finance houses Dr Onu stated, should provide the capital base and
            ensure credit liberalization to enable crucial industrial project
            take off.
          </p>
          <p>
            The governor expressed delight that the management of interbond
            finance and securities braved all odds to become the first
            indigenous finance outfit to provide the incentives for the
            industrial take off of the states. IFS is one of the few finance
            houses to have its head office outside Lagos.
          </p>
          <p>
            The chairman of that company, Chief Sunny Nlewedim explained the
            genuine desire of the organization to propel the private sectors
            towards the funding of economic activities in the country.
          </p>
          <p>
            He stated that the company was aware that traditional banking
            institution could no longer meet the growing capital requirements of
            perspective investors. The iron and steel senior staff association
            of Nigeria said in Benin of Wednesday that the closure of Delta
            steel complex in Aladia, a major source of raw material for the
            rolling mills at Jos, Katsina and Oshogbo, was an attempt to destroy
            the company and frustrate industrialization in the country.{" "}
          </p>
        </div>
        <div className="side-bar">
          <Sidenav />
        </div>{" "}
      </section>
    </>
  );
}

export default Taskfinance;
