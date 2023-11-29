// Your component file

import React from "react";
import Hero from "./Hero"; // Make sure to import your Hero component
import Carousel from "../Carousel/Carousel";

export default function CenteredHero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh] p-5 my-[40px]">
        <h1 className="font-bold text-[35px] max-w-[250px] md:max-w-full md:text-[45px] text-center">
          Umra safari <br /> Qabul: 2023
        </h1>
        <p className="max-w-[800px] text-center mt-[25px]">
          Rasululloh sallallohu alayhi va sallam "Bir Umra keyingi Umragacha
          bo'lgan gunohlarning kaforratidir" deya marhamat qilganlar.
        </p>
      </div>
      <div className="text-center flex flex-col gap-2">
        <Carousel slides={false} />
        <Carousel slides={true} />
      </div>
    </>
  );
}
