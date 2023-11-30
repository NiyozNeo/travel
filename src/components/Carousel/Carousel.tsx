// Carousel.tsx
"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Kaba from "../../../public/images/kaba.jpg";
import Clock from "../../../public/images/clock.jpg";
import Mosque from "../../../public/images/mosque.jpg";
import Ravza from "../../../public/images/ravza.jpg";

interface CarouselProps {
  slides: boolean;
}

export default class Carousel extends Component<CarouselProps> {
  render() {
    const { slides } = this.props;
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 3.5, // Kompyuterda 3.5 ta card
      autoplay: true,
      autoplaySpeed: 800,
      cssEase: "linear",
      rtl: slides,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3, // Planshetda 3 ta card
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Planshetda 2 ta card
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.3, // Mobil qurilmalarda 1 ta card
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className=" overflow-hidden">
        <Slider {...settings}>
          <div className="w-full p-4">
            <Image
              src={Kaba}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://images.unsplash.com/photo-1550613787-7612bf93bffc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>

          <div className="w-full p-4">
            <Image
              src={Ravza}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={Clock}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://images.unsplash.com/photo-1604655983671-9d03650f604c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHVtcmFofGVufDB8fDB8fHww`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={Mosque}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
