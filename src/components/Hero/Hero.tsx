// Your component file

import React from "react";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";

interface Props {
  header: {
    home: string;
    about: string;
    price: string;
    benefit: string;
    contact: string;
    mainText: string;
    umra: string;
    airPlane: string;
    hotel: string;
    visa: string;
    ellikBosh: string;
    insurance: string;
    transfer: string;
    gift: string;
    scarf: string;
    bag: string;
    vest: string;
    quran: string;
    water: string;
    mountain: string;
    factory: string;
    garden: string;
    xiroMountain: string;
    food: string;
    day: string;
    ziyorat: string;
  };
}

export default function CenteredHero({ header }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh] p-5 my-[40px]">
        <h1 className="font-bold text-[35px] max-w-[450px] md:text-[45px] text-center">
          {header.umra}
        </h1>
        <p className="max-w-[800px] text-center mt-[25px]">{header.mainText}</p>

        <Link
          href={"tel:+998901234567"}
          className="bg-[#3081D0] p-5 px-9 mt-8 text-[white] font-bold rounded-md"
        >
          Band qilish
        </Link>
      </div>
      <div className="text-center flex flex-col gap-2">
        <Carousel slides={false} />
        <Carousel slides={true} />
      </div>
    </>
  );
}
