import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[100px] my-[70px]">
      <div>
        <h1 className="font-bold text-[35px]">
          Long heading is what you see <br /> here in this feater section
        </h1>
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta magnam
          ipsam sed assumenda quae quos commodi recusandae ducimus error, ab
          obcaecati delectus beatae accusantium maiores!
        </p>
      </div>
      <div>
        <Image
          className="w-[500px] h-[500px] rounded-md"
          src={"https://picsum.photos/seed/picsum/200/300"}
          width={100}
          height={100}
          alt="pic"
        />
      </div>
    </div>
  );
}
