"use client";
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
import { useEffect, useRef } from "react";
import { useAnimation, motion, useScroll, useTransform } from "framer-motion";
import { Variables } from "@/app/app.config";
import { Props } from "@/lang/lang";

export default function Price({ header }: Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 2"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
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
        <motion.div
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            ref={ref}
            className="flex flex-col items-center my-[50px]"
        >
            <p className="font-semibold">{header.priceword}</p>
            <h1 className="font-bold text-[35px] my-[10px]">{header.tarifs}</h1>
            <p className="text-[14px]">{header.pricemain}</p>
            <div className="flex flex-wrap justify-center items-center gap-[40px] mt-[50px]">
                <Card
                    editional={header.ziyorat}
                    day={header.day}
                    title="Ekonom"
                    price="1250"
                    yearPrice="1250"
                    phone={Variables.phone}
                    data={textData}
                    travel={travel}
                    isComfort={false}
                />

                <Card
                    editional={header.ziyorat}
                    day={header.day}
                    title="Komfort"
                    price="1450"
                    yearPrice="1450"
                    phone={Variables.phone}
                    data={textData}
                    travel={travel}
                    isComfort={true}
                />
            </div>
        </motion.div>
    );
}
