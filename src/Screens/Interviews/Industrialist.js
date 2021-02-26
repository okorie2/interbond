import React from "react";
import Industrialists from "../../Assets/images/industrialists.jpg";
import Header from "../../components/Navbar/Header";
import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";
function Industrialist(props) {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="maingrid newspapers">
          <img src={Industrialists} alt="" className="interviewImage" />,
          <h3>INDUSTRALIST NEED INCENTIVES FROM THE GOVERMENT</h3>
          <p>
            Chief Sonny Nkwedim, chairman of Interbond Nigeria Limited,
            manufactures of electrical appliances and accessories is to humble,
            almost why that on a first encounter, one would be quick to ask how
            he has been able to build for himself a business empire which also
            includes a finance company, a mortgage bank and others.
          </p>
          <p>
            The other interesting thing about the dark complexioned and
            middle-aged man is the English meaning of the last three letters in
            his Surname. For a Helman of an electrical company, “diming’ the
            light may be the least expected of him. But even if the
            sophisticated chandeliers which he sells with other items at his
            Adeniyi Jones, Ikeja, head office, dim the light, Nkewedim’s warmth
            and sense of humor are of high voltage. Humble as he is, he likes
            challenges which is perhaps why he is into the chandelier market for
            the rich.
          </p>
          <p>
            His words: ‘it is a competitive trade and I like challenges. It
            brings but the best individual. Besides, I discovered that we don’t
            naturally have much of this business in this part of the world,
            having worked with an electrical and chandelier manufacturing
            company in the U.K. I have decided to go into the trade; to see if I
            can actualize the same dreams these people had achieved.{" "}
          </p>
          <p>
            According to him, the use of chandeliers is not foreign to Africa,
            since historically their origin is Ancient Egypt. He will not take
            the suggestion that his business is only for the rich, saying that
            he has other shops in Alaba Market where cheaper (price) varieties
            of his products are available. However, Nlewedim, who is also the
            chairman if Interbond finance and Finance and Securities admitted
            that Nigerians which have money to build houses go for fitting with
            aesthetic value because they don’t compromise on value. “Such
            consumers want to have the best in value oe have nothing at all, and
            we are trying to match their taste,“ he added. Also admitting that
            the boom in the construction industry last year, through early this
            rubbed off the interior decoration and lightening business, be
            lamented the hall into which the political uncertantly has thorn the
            business activities in, wishing that the impasse is quickly resolved
            to accelerate the wheels of economic development.
          </p>
          <p>
            Nlewedim, an awardee of the Men of Achievement Award organized in
            August by the Corporate Press Services also decried the situation in
            the foreign exchange market where practitioners in the productive
            sector buy foreign exchange at black market rates because of their
            demand in the official market. The situation, he said he reinforced
            the company positively into planning for expansion in local
            production which presently contributes to the percent of is total
            suppliers. For local production, he explained, the company readily
            gets raw materials and can plan ahead with it, unlike the 60 percent
            of imported sources overseas , which the political situation has
            made unpredictable and risky”, “we nee political stability to plan
            ahead as it is done is all economies. “
          </p>
          <p>
            Nlewedim humility again came to the fore when he explained why some
            finance houses run into trouble, “Some finance houses were greedy.
            They kept on accruing liabilities despite their shallow capital base
            and were careless what their choice of customers. Finance houses
            that have survived the storm are basically those that were very
            conscious of the risk management, for example those who took their
            customers lenders and borrowers through and through” According to
            him, it was reasonable for finance house to see the challenge they
            faced in breaking the banks’ monopoly of the money market, but it
            was entirely wrong to rush the way some finance houses did in their
            attempt to beat the banks.
          </p>
          <p>
            Taking a general look at the problems of industrialist; especially
            local inventors, Nlewedim restated the popular demand that they need
            support and their encouragement from government to enable them to
            survive the seemingly impressible problems of his cost of funds,
            lack of adequate infrastructure of the poor exchange rate of the
            naira. He, for example, the government and the Central Bank of
            Nigeria (CBN) to remove commercial and merchant banks as middlemen a
            sell foreign exchange directly to investors will add value to the
            economy faster. Our foreign exchange earnings have drastically and
            must very careful with the line we have,” he said.
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
}

export default Industrialist;
