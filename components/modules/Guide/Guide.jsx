import React from "react";
import Link from "next/link";
const Guide = () => {
  return (
    <div className="Guide mt-[100px] flex justify-around items-center flex-wrap max-[768px]:justify-center max-[768px]:gap-5">
      <Link href="/menu" className="border-2 rounded-lg	border-solid border-gray-600 px-3 py-3 ">Menu</Link>
      <Link href="/categories" className="border-2 rounded-lg	border-solid border-gray-600 px-3 py-3 ">Categories</Link>
      <Link href="/" className="border-2 rounded-lg	border-solid border-gray-600 px-3 py-3 ">Discount</Link>
    </div>
  );
};

export default Guide;
