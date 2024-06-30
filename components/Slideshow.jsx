import React, {useState} from "react";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { Slide,Fade } from "react-slideshow-image";

export default function Slides() {
  const images = [
    "/assets/images/coronation/c-1.jpeg",
    "/assets/images/coronation/c-2.jpeg",
    "/assets/images/coronation/c-3.jpeg",
    "/assets/images/coronation/c-4.jpeg",
    "/assets/images/coronation/c-5.jpeg",
    "/assets/images/coronation/c-6.jpeg",
    "/assets/images/coronation/c-7.jpeg",
    "/assets/images/coronation/c-8.jpeg",
    "/assets/images/coronation/c-9.jpeg",
    "/assets/images/coronation/c-10.jpeg",
    "/assets/images/coronation/c-11.jpeg",
    "/assets/images/coronation/c-12.jpeg",
  ];

  return (
    <Slide autoplay infinite easing="ease" duration={3000}>
        {images.map((image, index) => (
      <div key={index}  className="each-slide">
      <Image src={image} alt="coronation" layout="fill"  />
        </div>
        ))}
    </Slide>
  );
};


