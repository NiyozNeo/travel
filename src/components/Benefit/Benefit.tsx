import Image from "next/image";

export default function Benefit() {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8 ">
      <div>
        <div>
          <h1 className="font-bold text-[35px] max-w-[500px]">
            Discover the Benefits of Booking with us
          </h1>
          <p className="max-w-[650px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            magni magnam quisquam unde neque rerum cum dicta pariatur numquam
            inventore saepe ipsam explicabo illum exercitationem vero dolorum
            quaerat eaque, ipsum ex. Accusamus incidunt vitae exercitationem.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 mt-[25px]">
          <div>
            <p className="font-bold">24/7</p>
            <p className="max-w-[350px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi rem aut odio praesentium iste perspiciatis?
            </p>
          </div>
          <div>
            <p className="font-bold">Expert advice</p>
            <p className="max-w-[350px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi rem aut odio praesentium iste perspiciatis?
            </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="w-[500px] h-[500px] rounded-md"
          src={"https://picsum.photos/seed/picsum/200/300"}
          width={100}
          height={100}
          alt="pic"
        />
      </div>
    </div>
  );
}
