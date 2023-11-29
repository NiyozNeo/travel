import React from "react";
import { RiBox2Line } from "react-icons/ri";
import { HiOutlineCheck } from "react-icons/hi";
import Link from "next/link";
import "./card.css";
import { MdOutlineRestaurantMenu } from "react-icons/md";
interface Props {
  title: string;
  price: string;
  yearPrice: string;
  phone: string;
  data: any[];
  travel: any[];
  isComfort: boolean;
}

export default function Card({
  title,
  price,
  phone,
  data,
  travel,
  isComfort,
}: Props) {
  return (
    <div
      // style={{}}
      className=" p-5 lg:w-[400px] max-w-[450px] h-[900px] shadow-custom cursor-pointer"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex  justify-between">
            <div>
              <p className="font-bold text-blue-900 text-[20px]">{title}</p>
              <p className="font-bold text-[14px] text-blue-800">14 kun</p>
            </div>
            <div>
              <p className="font-bold text-[20px] text-blue-400">${price}</p>
            </div>
          </div>
          <div className="mt-[25px]  overflow-y-auto">
            {data.map((i) => (
              <div
                key={i.id}
                className="flex items-center mb-[15px] gap-[10px]"
              >
                {i.icon}
                <p>{i.text}</p>
              </div>
            ))}
            {isComfort ? (
              <div className="flex items-center mb-[15px] gap-[10px]">
                <MdOutlineRestaurantMenu />
                <p>3 mahal ovqat</p>
              </div>
            ) : (
              ""
            )}
            <p className="font-bold my-[25px] ms-[25px]">
              Ekskursiya va ziyoratlar
            </p>
            {travel.map((i) => (
              <div
                key={i.id}
                className="flex items-center mb-[15px] gap-[10px]"
              >
                {i.icon}
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto ">
          <div className="flex bg-blue-900 text-textWhite p-3 justify-center mb-[0px]">
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
