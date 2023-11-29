import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function Location() {
  return (
    <div className="my-[70px]">
      <div className="flex flex-wrap gap-8 items-center justify-between mb-[50px]">
        <div className="flex flex-col w-full md:w-2/3">
          <p>Discover</p>
          <h1 className="font-bold text-[35px]">Contact Relume</h1>
          <p className="max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quod autem culpa maiores quia quibusdam iure fugiat minima
            aspernatur reprehenderit?
          </p>
        </div>
        <div className="flex flex-col gap-7 w-full md:w-1/3">
          <div className="flex items-center gap-2">
            <HiOutlinePhone size={24} />
            <div>
              <p className="font-bold">Phone</p>
              <Link className="decoration underline" href={"tel:+998901235698"}>
                +998901235698
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <SlLocationPin size={24} />
            <div>
              <p className="font-bold">Office</p>
              <Link className="" href={"#"}>
                Tashkent Uzbekistan Yunusobod
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.532411548661!2d69.29434097613664!3d41.34078007130585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef38c46a7598b%3A0x1b4780b64fcdfc16!2zTFdOIGNvd29ya2luZyAo0LrQvtCy0L7RgNC60LjQvdCzKQ!5e0!3m2!1sen!2s!4v1701230893930!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
