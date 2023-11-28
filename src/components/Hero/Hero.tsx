// Your component file

import React from "react";
import Hero from "./Hero"; // Make sure to import your Hero component
import Carousel from "../Carousel/Carousel";

export default function CenteredHero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh] p-5 my-[40px]">
        <h1 className="font-bold text-[35px] max-w-[250px] md:max-w-full md:text-[45px] text-center">
          Medium length hero <br /> heading goes here
        </h1>
        <p className="max-w-[800px] text-center mt-[25px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex
          tempore hic quos dicta alias, deserunt possimus deleniti mollitia in,
          illo dolorum nihil eum molestiae?
        </p>
      </div>
      <div className="text-center flex flex-col gap-2">
        <Carousel slides={false} />
        <Carousel slides={true} />
      </div>
    </>
  );
}
