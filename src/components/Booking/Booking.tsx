/* eslint-disable @next/next/inline-script-id */
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
                    Joy band qilish
                </h2>
                <form method="post" className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <div className="relative max-w-sm">
                            <label
                                htmlFor="traveldate"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Ketish vaqti
                            </label>

                            <input
                                type="date"
                                id="traveldate"
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
                            Tarif turi
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

                    <div className="mb-5">
                        <button
                            type="submit"
                            className="bg-[#3081D0] p-5 px-9  text-[white] font-bold rounded-md "
                        >
                            {header.book}
                        </button>
                    </div>
                </form>
                <form method="post" action="/your-after-payment-url">
                    <script
                        src="https://my.click.uz/pay/checkout.js"
                        className="uzcard_payment_button"
                        data-service-id="MERCHANT_SERVICE_ID"
                        data-merchant-id="MERCHANT_ID"
                        data-transaction-param="MERCHANT_TRANS_ID"
                        data-merchant-user-id="MERCHANT_USER_ID"
                        data-amount="50000"
                        data-card-type="MERCHANT_CARD_TYPE"
                        data-label="Pay"
                    ></script>
                </form>
            </div>
            <Script src="https://my.click.uz/pay/checkout.js" />
            <Script
                onLoad={() => {
                    var linkEl = document.querySelector(".input-btn");
                    linkEl.addEventListener("click", function () {
                        createPaymentRequest(
                            {
                                service_id: "MERCHANT_SERVICE_ID",
                                merchant_id: "MERCHANT_ID",
                                amount: 50000,
                                transaction_param: "MERCHANT_TRANS_ID",
                                merchant_user_id: "MERCHANT_USER_ID",
                            },
                            function (data) {
                                console.log("closed", data.status);
                            }
                        );
                    });
                }}
            >
            </Script>
        </motion.div>
    );
}
