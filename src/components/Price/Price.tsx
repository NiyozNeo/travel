import Card from "../Card/Card";
import { GiAirplaneDeparture, GiPalmTree } from "react-icons/gi";
import { FaHotel, FaQuran } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import { BsGift } from "react-icons/bs";
import { GrRestroomWomen } from "react-icons/gr";
import { PiHandbag } from "react-icons/pi";
import { FaVest } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { GiMountaintop } from "react-icons/gi";

export default function Price() {
  const textData = [
    {
      id: 1,
      icon: <GiAirplaneDeparture />,
      text: "Aviachipta",
    },
    {
      id: 2,
      icon: <FaHotel />,
      text: "Mehmonxona",
    },
    {
      id: 3,
      icon: <RiVisaLine />,
      text: "Saudia Arabiston vizasi",
    },
    {
      id: 4,
      icon: <FaUserTie />,
      text: "Tajribalik ellikboshi",
    },
    {
      id: 5,
      icon: <FaHouseMedicalCircleCheck />,
      text: "Tibbiy sug'urta",
    },
    {
      id: 6,
      icon: <TbBus />,
      text: "Transfer",
    },
    {
      id: 7,
      icon: <BsGift />,
      text: "Hadyalar",
    },
    {
      id: 8,
      icon: <GrRestroomWomen />,
      text: "Ayollar uchun ro'mol",
    },
    {
      id: 9,
      icon: <PiHandbag />,
      text: "Sumka",
    },
    {
      id: 10,
      icon: <FaVest />,
      text: "Nimcha",
    },
    {
      id: 11,
      icon: <FaQuran />,
      text: "Qur'on kitobi",
    },
    {
      id: 12,
      icon: <IoIosWater />,
      text: "Zamzam suvi 5 L",
    },
  ];
  const travel = [
    {
      id: 1,
      icon: <GiMountaintop />,
      text: "Uhud tog'i va shahidlari",
    },
    {
      id: 2,
      icon: <FaQuran />,
      text: "Qur'on zavodi",
    },
    {
      id: 3,
      icon: <GiPalmTree />,
      text: "Xurmo bog'i",
    },
    {
      id: 4,
      icon: <GiMountaintop />,
      text: "Xiro tog'i",
    },
  ];
  const textDataBusiness = [
    {
      id: 1,
      text: "Feature text goes here",
    },
    {
      id: 2,
      text: "Feature text goes here",
    },
    {
      id: 3,
      text: "Feature text goes here",
    },
    {
      id: 4,
      text: "Feature text goes here",
    },
    {
      id: 5,
      text: "Feature text goes here",
    },
  ];
  return (
    <div className="flex flex-col items-center my-[70px]">
      <p className="font-semibold">Tagline</p>
      <h1 className="font-bold text-[35px] my-[10px]">Pricing plan</h1>
      <p className="text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit quod
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[40px] mt-[50px]">
        <Card
          title="Ekonom"
          price="19"
          yearPrice="199"
          phone="+998901234567"
          data={textData}
          travel={travel}
          isComfort={false}
        />
        <Card
          title="Komfort"
          price="29"
          yearPrice="299"
          phone="+998902365891"
          data={textData}
          travel={travel}
          isComfort={true}
        />
      </div>
    </div>
  );
}
