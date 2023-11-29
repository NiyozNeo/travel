// Your component file

import React from "react";
import Hero from "./Hero"; // Make sure to import your Hero component
import Carousel from "../Carousel/Carousel";
interface Props {
  header: {
    home: string;
    about: string;
    price: string;
    experience: string;
    benefit: string;
    guides: string;
    contact: string;
    mainText: string;
    umra: string;
  };
  lang: string;
}
export default function CenteredHero({ lang, header }: Props) {
  console.log(lang);
  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh] p-5 my-[40px]">
        <h1 className="font-bold text-[35px] max-w-[450px] md:text-[45px] text-center">
          {header.umra}
        </h1>
        <p className="max-w-[800px] text-center mt-[25px]">{header.mainText}</p>
      </div>
      <div className="text-center flex flex-col gap-2">
        <Carousel slides={false} />
        <Carousel slides={true} />
      </div>
    </>
  );
}
