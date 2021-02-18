import  React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
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
import Client7 from '../../Assets/images/client7.jpg'
import Client8 from '../../Assets/images/client8.jpg'
import Client9 from '../../Assets/images/client9.jpg'
import Client10 from '../../Assets/images/client10.jpg'
import Client11 from '../../Assets/images/client11.jpg'
import Footer from '../../components/Footer/Footer';

const Home=()=>{
    useEffect(() => {
        Aos.init({duration:3000})
        
    }, []);
    return(
        <>
        <Navbar/>
        <div className="first-flex" data-aos="zoom-in-up">
            <div className="flex1"><img src={Client}/></div>
            <div className="flex2" >
                <h3>INTERBOND INDUSTRIES</h3>
                <p>Manufacturers of  lamp holders, switches, sockets, wall brackets and<br/> other electrical fittings.
                   We produce vast varieties of electrical fittings with unique aesthetic designs
                </p><br/>
                <h3>INTERBOND FINANCE</h3>
                <p>We render loan services, and buy and sell foreign currencies</p>
                <p> we have over 20 years of experience</p>
            </div>
        </div>
        
        <div className="extras" data-aos="zoom-in">
            <h1>I also provide high-quality Squarespace plugins, snippets, training, and more1</h1>
            <div className="extras-flex">
                <div>
                    <h4>Code snippets</h4>
                    <p>These are exclusively made for Squarespace sites and will offer custom design options with easy to understand instructions.</p>
                </div>
                <div>
                    <h4>Code snippets</h4>
                    <p>These are exclusively made for Squarespace sites and will offer custom design options with easy to understand instructions.</p>
                </div>
                <div>
                    <h4>Code snippets</h4>
                    <p>These are exclusively made for Squarespace sites and will offer custom design options with easy to understand instructions.</p>
                </div>
            </div>
        </div>
        <div className="about" data-aos="ease-in">
            <div className="abt1"><img src={Client3}/></div>
            <div className="abt2">
                <h1>SUNNY NLEWEDIM</h1>
                <p>Krista Gray is a freelance writer and web producer who lives in San Francisco.<br/> When she's not working with clients through her company GoldSquare, <br/>she loves teaching (and taking) the Bar Method, traveling, and learning new things. You can find her on her blog, or on Twitter, Instagram, or LinkedIn!</p>
            </div>
        </div>
        <div className="interviews">
            <h2>INTERVIEWS OF SUNNY NLEWEDIM</h2>
            <div className="interview-flex">
                <div className="interview-grid">
                    <div><img src={Client4}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies <br/>
                        <button className="myButton2" type="button"><Link to="/defective">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client5}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies <br/>
                        <button className="myButton2" type="button"><Link to="/visionary">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client8}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/taskfinance">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client10}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/industrialist">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client7}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/interbond">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client11}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/interim">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client9}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/scrambles">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client3}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/reaping">see more</Link></button>
                    </div>
                </div>
                <div className="interview-grid">
                    <div><img src={Client6}/></div>
                    <div className="int-text">
                        Chief Nlewidim decries defective policies decries defective policies Chief Nlewidim decries defective policies decries defective policies<br/>
                        <button className="myButton2" type="button"><Link to="/reaping">see more</Link></button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home