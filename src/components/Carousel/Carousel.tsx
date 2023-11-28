// Carousel.tsx
"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              src={`https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856269-stock-photo-travel-the-world-monument-concept.jpg`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856269-stock-photo-travel-the-world-monument-concept.jpg`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856269-stock-photo-travel-the-world-monument-concept.jpg`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856269-stock-photo-travel-the-world-monument-concept.jpg`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856269-stock-photo-travel-the-world-monument-concept.jpg`}
              alt={`hero`}
              width={420}
              height={420}
              style={{ height: "420px", width: "420px" }}
            />
          </div>
          <div className="w-full p-4">
            <Image
              src={`https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856269-stock-photo-travel-the-world-monument-concept.jpg`}
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
