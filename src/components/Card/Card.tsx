import React from "react";
import { RiBox2Line } from "react-icons/ri";
import { HiOutlineCheck } from "react-icons/hi";
import Link from "next/link";

interface Props {
  title: string;
  price: string;
  yearPrice: string;
  phone: string;
  feature: any[];
}

export default function Card({
  title,
  price,
  yearPrice,
  phone,
  feature,
}: Props) {
  return (
    <div className="border border-slate-800 p-5 lg:w-[400px] max-w-[450px] h-[550px]">
      <div className="flex justify-end">
        <RiBox2Line size={24} />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="font-bold">{title}</p>
          <h2 className="font-bold text-[37px]">${price}/mo</h2>
          <p className="text-[12px]">or ${yearPrice} year</p>
          <div className="h-[1px] bg-[black] w-full my-[20px]"></div>
          <div className="mt-[25px] max-h-[300px] overflow-y-auto">
            <p className="my-[20px]">Includes:</p>
            {feature.map((i) => (
              <div
                key={i.id}
                className="flex items-center mb-[15px] gap-[10px]"
              >
                <HiOutlineCheck />
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto ">
          <div className="flex justify-center mb-[30px]">
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
