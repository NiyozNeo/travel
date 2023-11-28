import React from "react";
import Description from "../Descr/Descr";

export default function Experience() {
  return (
    <div className="my-[70px]">
      <div className="flex flex-col items-center justify-center ">
        <p className="font-semibold">Discover</p>
        <h1 className="font-bold text-[35px] text-center">
          Unforgettable Travel Experience <br /> Await You
        </h1>
        <p className="max-w-[650px] text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center justify-around mt-[60px]">
        <Description
          title="Explore the World with Easy"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
        <Description
          title="Explore the World with Easy"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
        <Description
          title="Explore the World with Easy"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
      </div>
    </div>
  );
}
