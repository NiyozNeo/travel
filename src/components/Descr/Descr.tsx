import Link from "next/link";
import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiBox2Line } from "react-icons/ri";
import hotel1 from "../../../public/images/hotel1.jpg";
import hotel2 from "../../../public/images/hotel2.jpg";
interface Props {
    title: string;
    icons: any;
    desc: string;
    isImage: boolean;
}
import Image from "next/image";
 
export default function Description({ title, desc, icons, isImage }: any) {
    return (
        <div className="flex flex-col items-center">
            {icons}
            <h2 className="font-bold text-[35px] my-[25px] max-w-[400px] text-center">
                {title}
            </h2>
            <p className="text-center max-w-[450px]">{desc}</p>
            {isImage ? (
                <div className="flex mt-[10px]">
                    <Link
                        href={"https://maps.app.goo.gl/DnNARjfrRwNRkRNq7"}
                        target="_blank"
                    >
                        <Image
                            src={hotel1}
                            alt="no image"
                            width={200}
                            height={300}
                            className="mr-[20px]"
                        ></Image>
                    </Link>
                    <Link
                        href={"https://maps.app.goo.gl/7viijDnka78vTpzV8"}
                        target="_blank"
                    >
                        <Image
                            src={hotel2}
                            alt="no image"
                            width={200}
                            height={300}
                        ></Image>{" "}
                    </Link>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
