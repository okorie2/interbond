import React, { useEffect } from "react";
import Header from "../components/Navbar/Header";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonPlay,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../Screens/Interbondindustries.css";
import Chand1 from "../Assets/images/chandelier-lng.jpg";
import Chand2 from "../Assets/images/chandelier1.jpg";
import Chand3 from "../Assets/images/chandelier2.jpg";
import Lamp1 from "../Assets/images/lamp1.jpg";
import Lamp2 from "../Assets/images/lamp2.jpg";
import Lamp3 from "../Assets/images/lamp3.jpg";
import Fits1 from "../Assets/images/fittings (1).jpg";
import Fits2 from "../Assets/images/fittings (2).jpg";
import Fits3 from "../Assets/images/fittings (3).jpg";
import Fits4 from "../Assets/images/fittings (4).jpg";
import Fits5 from "../Assets/images/fittings (5).jpg";
import Fits6 from "../Assets/images/fittings (6).jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/Footer";

const InterbondIndustries = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Header />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        className="carousel"
      >
        <Slider>
          <Slide index={0}>
            <div className="carousel-img3">
              <p className="legend">
                INTERBOND ELECTRICALS. DECORATIVE LIGHTINGS
              </p>
              <div className="carousel-control">
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="carousel-img2">
              <p className="legend">
                INTERBOND ELECTRICALS. DECORATIVE LIGHTINGS
              </p>
              <div className="carousel-control">
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="carousel-img1">
              <p className="legend">
                INTERBOND ELECTRICALS. DECORATIVE LIGHTINGS
              </p>
              <div className="carousel-control">
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
      <div>
        <h3>Interbond Chandeliers</h3>
        <p>
          Vast varities of Chandeliers with very unique designs and detailings.
          High durability and top notch aesthetics
        </p>
      </div>
      <div className="bi-flex">
        <div data-aos="zoom-in-up">
          <img src={Chand1} alt="interbond industries" />
        </div>
        <div className="tri-flex">
          <div data-aos="zoom-in-up">
            <img src={Chand2} alt="interbond industries" />
          </div>
          <div data-aos="fade-left">
            <img src={Chand3} alt="interbond industries" />
          </div>
        </div>
      </div>
      <div className="third-span">
        <h3>Interbond Lamp shades</h3>
        <p>
          Lamp shades varies from sizes to sizes, color, quality and even the
          ray of light emitted. Interbond Electricals provide lampshades for the
          right purpose.
        </p>

        <div className="tri-col">
          <div data-aos="zoom-in-down">
            <img src={Lamp1} alt="interbond industries" />
          </div>
          <div data-aos="zoom-in-down">
            <img src={Lamp3} alt="interbond industries" />
          </div>
          <div data-aos="zoom-in-down">
            <img src={Lamp2} alt="interbond industries" />
          </div>
        </div>
      </div>
      <div className="last">
        <h3>Other Electrical Fittings</h3>
        <p>
          Interbond industries produce other different kind of electrical
          fittings,
          <br /> both for exterior and interior purpose. Iterbond produces
          ranging from small to medium to large
          <br /> elctrical fittings for aesthetics and customer satisfaction.
        </p>
        <div class="grid-container">
          <div class="item1">
            <img src={Fits1} alt="interbond industries" />
          </div>

          <div class="item3">
            <img src={Fits3} alt="interbond industries" />
          </div>
          <div class="item4">
            <img src={Fits4} alt="interbond industries" />
          </div>
          <div class="item5">
            <img src={Fits5} alt="interbond industries" />
          </div>
          <div class="item6">
            <img src={Fits6} alt="interbond industries" />
          </div>
          {/* <div class="item7">7</div>
          <div class="item8">8</div>
          <div class="item9">9</div>
          <div class="item10">10</div>
          <div class="item11">11</div>
          <div class="item12">12</div>
          <div class="item13">13</div>
          <div class="item14">14</div>
          <div class="item15">15</div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InterbondIndustries;
