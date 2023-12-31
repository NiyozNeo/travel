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
  day: string;
  editional: string;
  data: any[];
  travel: any[];
  isComfort: boolean;
}

export default function Card({
  title,
  price,
  phone,
  data,
  editional,
  travel,
  day,
  isComfort,
}: Props) {
  return (
    <div
      // style={{}}
      className=" p-5 lg:w-[400px] w-full   cursor-pointer card"
    >
      <div className="flex card-inner flex-col h-[930px] justify-between ">
        <div>
          <div className="flex  justify-between">
            <div>
              <p className="font-bold text-blue-900 text-[20px]">{title}</p>
              <p className="font-bold text-[14px] text-blue-800">14 {day}</p>
            </div>
            <div>
              <p className="font-bold text-[20px] text-blue-400">${price}</p>
            </div>
          </div>
          <div className="mt-[25px]  overflow-y-auto">
            {data.map((i) =>
              (isComfort && i.id <= 13) || (!isComfort && i.id !== 13) ? (
                <div
                  key={i.id}
                  className="flex items-center mb-[15px] gap-[10px]"
                >
                  {i.icon}
                  <p>{i.text}</p>
                </div>
              ) : null
            )}

            <p className="font-bold my-[25px] ms-[25px]">{editional}</p>
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
          <div className="flex bg-[#3081D0] text-textWhite p-3 justify-center mb-[0px]">
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
