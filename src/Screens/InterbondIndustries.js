import React from "react";
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

const InterbondIndustries = () => {
  return (
    <>
      <Header />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
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
        <div>
          <img src={Chand1} alt="interbond industries" />
        </div>
        <div className="tri-flex">
          <div>
            <img src={Chand2} alt="interbond industries" />
          </div>
          <div>
            <img src={Chand3} alt="interbond industries" />
          </div>
        </div>
      </div>
      <div>
        <h3>Interbond Wallclocks</h3>
        <p>
          Lamp shades varies from sizes to sizes, color, quality and even the
          ray of light emitted. Interbond Electricals provide lampshades for the
          right purpose.
        </p>
      </div>
      <div className="tri-col">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default InterbondIndustries;
