import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../Home/home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../../components/Navbar/navbar';
import Client from '../../Assets/images/client.jpg'
import Client2 from '../../Assets/images/client2.jpg'
import Client3 from '../../Assets/images/client3.jpg'
import Client4 from '../../Assets/images/client4.jpg'
import Client5 from '../../Assets/images/client5.jpg'
import Client6 from '../../Assets/images/client6.jpg'
import Client7 from '../../Assets/images/client7c.jpg'
import Client8 from '../../Assets/images/client8.jpg'
import Client9 from '../../Assets/images/client9.jpg'
import Client10 from '../../Assets/images/client10b.jpg'
import Client11 from '../../Assets/images/client11.jpg'
import Footer from '../../components/Footer/Footer';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })

    }, []);
    return (
        <>
            <Navbar />
            <div className="first-flex" data-aos="zoom-in-up">
                <div className="flex1"><img src={Client} alt="Sonny Nlewedim" /></div>
                <div className="flex2" >
                    <h3>CHIEF SONNY NLEWEDIM</h3>
                    <p>He is the Chief Executive Officer of Interbond Nigeria Ltd, like the king, who William Shakespeare in his book: “King Richard 11,” said all the waters in the rude rough seas could not wash off the anointing balm on his head. The foremost industrialist, entrepreneur and politician, like a colossus, bestrode Nigeria’s manufacturing and financial sector in the 90’s. Since then, he has remained one of the few leading lights in a nation that is still groping in the dark for competent leadership. He and a few others championed the manufacturing of electrical appliances and accessories in the Nigeria in the early 90s. Interbond, which had its factory located on No. 4 Nwoha Street, Osisioma, Aba, Abia State, was famous for manufacturing of sophisticated chandeliers that rivaled similar products from Europe, America as well as Asia.
                </p><br />
                    <h3>REPUTATIONS</h3>
                    <p>The astute businessman is also noted for his several interventions to successive administrations on how to grow the Nigerian economy. These interventions are mostly on correcting defective policies hindering the realization of the country’s industrialization dream. He has persistently maintained that a situation of poor infrastructure base, capital flight and an exchange rate that skews against the Naira will continue to discourage investments in the manufacturing sector.</p>
                    <p></p>
                </div>
            </div>

            <div className="about" data-aos="ease-in">
                
                <div className="abt2">
                    <h3>POSITION AND ACCOMPLISHMENTS</h3>
                    <p> His position is that the government and managers of the economy must combine both local and international perspectives that will inject a new dynamism to help revive the nation’s economy. Chief Nlewedim’s experience is not limited to the business world. He has also had stint in the public service. He was appointed as Chairman of Imo State Environmental Protection Agency during the botched Third Republic by then Governor Evan Enwerem. As head of the agency, Nlewedim worked directly under the then deputy governor of the state, Dr. Douglas Acholonu. Ahead of the country’s return to civil rule in 1999, Nlewedim aspired to govern Abia State but later dropped his ambition following interventions by some notable Nigerians.<br/> Born in Umuawa Alaocha, Ohuhu, Umuahia in Abia State, Nigeria,Chief Nlebedim attended
                    Comprehensive Secondary School Ogbor Hill, Aba. He later proceeded to Lagos State University, where he obtained a Diploma in Law. He began his career at GBO Olivanti (a subsidiary of UAC Nigeria) as a Supervisor. He later moved to RT Briscoe Motors as an Assistant Marketing Manager. He later disengaged from the services of the company set up his own business.In 1992, he was honoured with the Corporate Press Services Men of Achievement Award.</p>
                    <h3>AWARDS AND HONORS</h3>
                    <p>1994 ROLE MODEL ENTERPRENEURIAL AWARD BY ENTERPREPREURSHIP DEVELOPMENT CENTER</p>
                    <p>NATIONAL ASSOCIATION OF ABIA STATE STUDENTS UNION, 1996 GRAND PATRON</p>
                    <p>MEMBER OF LAGOS CHAMBER OF COMMERCE</p>
                    <p>MEMBER OF NIGERIA SOUTH AFRICA CHAMBER OF COMMERCE</p>
                    <p>UMUAHIA CHAMBER OF COMMERCE MERIT AWARD IMO STATE CHAPTER</p>
                    <p>NATIONAL ASSOCIATION OF WOMEN JOURNALISTSCERTIFICATE OF HONOR</p>
                </div>
                <div className="abt1"> </div>
            </div>

            <div className="extras" data-aos="zoom-in">
                <h1>INTERBOND INDUSTRIES</h1>
                <h2>We provide the best lightning and lightning facilities for customer satisfaction</h2>
                <div className="extras-flex">
                    <div>
                        <h4>Establishment</h4>
                        <p>Interbond Electrical has been established for over 10 years as one of the leading ,anufacturers and suppliers of luminiars ranging from spot lights, wall and porch lanterns to very big chandelier.</p>
                    </div>
                    <div>
                        <h4> Fittings Varieties</h4>
                        <p>our extensive range of light fittings are manufactured in both Nigeria and overseas by renownedcraftmen talented in the intricate science of decorative lighting</p>
                    </div>
                    <div>
                        <h4>Customer Service</h4>
                        <p>customers are invited to visit our showrooms where they can receive advise demonstration by our team of highly trained lighting experts</p>
                    </div>
                </div><br /><br /> <br/>
               <Link to ="/interbondindustries"> <button className="myButton2">EXPLORE PRODUCTS</button></Link>
            </div>
            
            <div className="interviews" id="interview">
                <h2>INTERVIEWS OF SONNY NLEWEDIM</h2>
                <div className="interview-flex">
                    <div className="interview-grid">
                        <div><img src={Client4} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Chief Nlewidim decries defective policies  <br />
                            <button className="myButton2" type="button"><Link to="/defective">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client5} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Abia State Needs Visionary <br />
                            <button className="myButton2" type="button"><Link to="/visionary">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client8} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Government Tasks Finance<br />
                            <button className="myButton2" type="button"><Link to="/taskfinance">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client10} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                           Interbond Begins Local Production <br />
                            <button className="myButton2" type="button"><Link to="/interbond">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client7} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Interim<br />
                            <button className="myButton2" type="button"><Link to="/interim">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client11} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Reaping The Gains<br />
                            <button className="myButton2" type="button"><Link to="/reaping">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client9} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Political Associations in Abia<br />
                            <button className="myButton2" type="button"><Link to="/scrambles">see more</Link></button>
                        </div>
                    </div>
                    <div className="interview-grid">
                        <div><img src={Client6} alt="Sonny Nlewedim" /></div>
                        <div className="int-text">
                            Industrialists Need Incentives From The Government<br />
                            <button className="myButton2" type="button"><Link to="/industrialist">see more</Link></button>
                        </div>
                    </div>
                  
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home