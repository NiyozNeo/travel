import Card from "../Card/Card";

export default function Price() {
  const textData = [
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
          title="Basic Plan"
          price="19"
          yearPrice="199"
          phone="+998901234567"
          feature={textData}
        />
        <Card
          title="Business Plan"
          price="29"
          yearPrice="299"
          phone="+998902365891"
          feature={textDataBusiness}
        />
      </div>
    </div>
  );
}
