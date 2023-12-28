"use client";
import { Props } from "@/lang/lang";
import { useScroll, useTransform, motion } from "framer-motion";
import Script from "next/script";
import { useRef } from "react";

export default function Booking({ header }: Props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            ref={ref}
            className="my-[30px]"
        >
            <div>
                <h2 className="font-bold text-[35px] text-center mb-4">
                    {header.bookplace}
                </h2>
                <div className="mb-5">
                    <div className="relative max-w-sm">
                        <label
                            htmlFor="traveldate"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            {header.ketishvaqti}
                        </label>
                        <p className="text-[10px]">
                        {header.warnketishvaqti}

                        </p>
                        <input
                            type="date"
                            id="traveldate"
                            min="2023-12-15"
                            max="2025-02-01"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                            placeholder="Select date"
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="tarifselect"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        {header.tariftype}
                    </label>
                    <select
                        name="tarif"
                        id="tarifselect"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="standart">Standart</option>
                        <option value="komfort">Komfort</option>
                    </select>
                </div>

                <form
                    action="https://my.click.uz/services/pay"
                    id="click_form"
                    method="get"
                    target="_blank"
                >
                    <input type="hidden" name="amount" value="$transAmount" />
                    <input
                        type="hidden"
                        name="merchant_id"
                        value="$merchantID"
                    />
                    <input
                        type="hidden"
                        name="merchant_user_id"
                        value="$merchantUserID"
                    />
                    <input type="hidden" name="service_id" value="$serviceID" />
                    <input
                        type="hidden"
                        name="transaction_param"
                        value="$transID"
                    />
                    <input type="hidden" name="return_url" value="$returnURL" />
                    <input type="hidden" name="card_type" value="$cardType" />
                    <button type="submit" className="click_logo">
                        <i></i>Pay with CLICK
                    </button>
                </form>

            </div>
        </motion.div>
    );
}
