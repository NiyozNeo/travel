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
import { MdOutlineRestaurantMenu } from "react-icons/md";

interface Props {
  header: {
    home: string;
    about: string;
    price: string;
    benefit: string;
    contact: string;
    mainText: string;
    umra: string;
    airPlane: string;
    hotel: string;
    visa: string;
    ellikBosh: string;
    insurance: string;
    transfer: string;
    gift: string;
    scarf: string;
    bag: string;
    vest: string;
    quran: string;
    water: string;
    mountain: string;
    factory: string;
    garden: string;
    xiroMountain: string;
    food: string;
    day: string;
    ziyorat: string;
  };
}

export default function Price({ header }: Props) {
  const textData = [
    {
      id: 1,
      icon: <GiAirplaneDeparture />,
      text: header.airPlane,
    },
    {
      id: 2,
      icon: <FaHotel />,
      text: header.hotel,
    },
    {
      id: 3,
      icon: <RiVisaLine />,
      text: header.visa,
    },
    {
      id: 4,
      icon: <FaUserTie />,
      text: header.ellikBosh,
    },
    {
      id: 5,
      icon: <FaHouseMedicalCircleCheck />,
      text: header.insurance,
    },
    {
      id: 6,
      icon: <TbBus />,
      text: header.transfer,
    },
    {
      id: 7,
      icon: <BsGift />,
      text: header.gift,
    },
    {
      id: 8,
      icon: <GrRestroomWomen />,
      text: header.scarf,
    },
    {
      id: 9,
      icon: <PiHandbag />,
      text: header.bag,
    },
    {
      id: 10,
      icon: <FaVest />,
      text: header.vest,
    },
    {
      id: 11,
      icon: <FaQuran />,
      text: header.quran,
    },
    {
      id: 12,
      icon: <IoIosWater />,
      text: header.water,
    },
    {
      id: 13,
      icon: <MdOutlineRestaurantMenu />,
      text: header.food,
    },
  ];
  const travel = [
    {
      id: 1,
      icon: <GiMountaintop />,
      text: header.mountain,
    },
    {
      id: 2,
      icon: <FaQuran />,
      text: header.factory,
    },
    {
      id: 3,
      icon: <GiPalmTree />,
      text: header.garden,
    },
    {
      id: 4,
      icon: <GiMountaintop />,
      text: header.xiroMountain,
    },
  ];

  return (
    <div className="flex flex-col items-center my-[70px]">
      <p className="font-semibold">Narx</p>
      <h1 className="font-bold text-[35px] my-[10px]">Ta'riflarimiz</h1>
      <p className="text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit quod
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[40px] mt-[50px]">
        <Card
          editional={header.ziyorat}
          day={header.day}
          title="Ekonom"
          price="19"
          yearPrice="199"
          phone="+998901234567"
          data={textData}
          travel={travel}
          isComfort={false}
        />
        <Card
          editional={header.ziyorat}
          day={header.day}
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
