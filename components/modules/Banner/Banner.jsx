import Link from "next/link";
const Banner = () => {
  return (
    <div className="Banner flex  max-[768px]:flex-col-reverse">
      <div className="left_banner flex flex-col mt-[20px]">
        <h2 className=" border-[3px] border-solid border-[#53c60b] w-fit px-2 py-2">BotoFood</h2>
        <p className="font-medium	mt-[16px]">Food Delivery and Takeout!</p>
        <span className="text-gray-600 text-justify mt-[16px] font-medium">
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/" className="bg-[#53c60b] text-white px-[30px] py-[10px] w-fit mt-[30px] rounded-[5px]">See All</Link>
      </div>
      <div className="right_banner">
        <img src="/images/banner.png" alt="Food image" className="w-[700px] max-[992px]:w-[900px] max-[768px]:w-full"/>
      </div>
    </div>
  );
};

export default Banner;