import React from 'react';
import {Link} from 'react-router-dom'
import '../Footer/footer.css';
import '../Navbar/navbar.css';
import Fb from '../../Assets/svgs/Fbicon.svg'
import Ig from '../../Assets/svgs/instaIcon.svg'
import EcoIcon from '@material-ui/icons/Eco';

const Footer = ()=>{
    return(
        <>
        <div>
        <div className="footer" >
       
            <div className="footer-flex">
            <div className="fter"><EcoIcon className="logo"/><b className="fter title"><Link to="/"> I N T E R B O N D</Link></b></div>
            <div className="ftlink"><Link to="/about">OUR COMPANY</Link></div>
            <div className="ftlink"><Link to="/location">INTERVIEWS</Link></div>
            
        </div><br/>
        <div className="border"></div><br/>

        <div className="footer-grid" id="address">
            <div className="left flex">
                <div> <b>INTERBOND INDUSTRIES</b></div>
                <div>9 Millitary Street, Onikan LAgos</div>
                <div>P.O Box 5609 Ikeja Lagos</div>
            </div>
            <div className="right flex">
                <div><b>Contact Us (Central Office)</b></div>
                <div>P : 08085034987</div>
                <div>M : interbondnig.com</div>
            </div><br/> <br/>
            <div className="icon-flex">
                <div> <img src={Fb}/></div>
                <div><img src={Ig}/></div>
            
            </div>
        </div>
        
        </div>
        </div>
        
        </>
    )
}
export default Footer;