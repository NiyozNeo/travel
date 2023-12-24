// Your component file

import React from "react";
import Link from "next/link";
import Carousel from "../Carousel/Carousel";
import {Variables} from '../../app/app.config'
import { Props } from "@/lang/lang";

export default function CenteredHero({ header }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[50vh] p-5 my-[40px]">
        <h1 className="font-bold text-[35px] max-w-[450px] md:text-[45px] text-center">
          {header.umra}
        </h1>
        <p className="max-w-[800px] text-center mt-[25px]">{header.mainText}</p>

        <Link
          href={`tel:${Variables.phone}`}
          className="bg-[#3081D0] p-5 px-9 mt-8 text-[white] font-bold rounded-md"
        >
          {header.book}
        </Link>
      </div>
      <div className="text-center flex flex-col gap-2">
        <Carousel slides={false} />
        <Carousel slides={true} />
      </div>
    </>
  );
}
