import React from "react";
import { RiBox2Line } from "react-icons/ri";

interface Props {
  title: string;
  desc: string;
}

export default function Description({ title, desc }: Props) {
  return (
    <div className="flex flex-col items-center">
      <RiBox2Line size={40} />
      <h2 className="font-bold text-[35px] my-[25px] max-w-[400px] text-center">
        {title}
      </h2>
      <p className="text-center max-w-[450px]">{desc}</p>
    </div>
  );
}
