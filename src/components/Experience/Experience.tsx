import React from "react";
import Description from "../Descr/Descr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";

export default function Experience() {
  return (
    <div className="my-[70px]">
      <div className="flex flex-col items-center justify-center ">
        <p className="font-semibold">Afzalliklar</p>
        <h1 className="font-bold text-[35px] text-center">
          Biz Taklif Qilamiz
        </h1>
        <p className="max-w-[650px] text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center mt-[60px]">
        <Description
          icons={<MdOutlineWorkspacePremium size={40} />}
          title="Mas'uliyat bilan yondashuv"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
        <Description
          icons={<IoWalletOutline size={40} />}
          title="Hamyonbop, Qulay va Arzon"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
        <Description
          icons={<AiOutlineSafety size={40} />}
          title="Yuqori malakali mutaxassislar ko'magi"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique possimus recusandae inventore beatae vitae iure deserunt
          vel, nobis rem? Tempora possimus eligendi et eaque necessitatibus,"
        />
      </div>
    </div>
  );
}
