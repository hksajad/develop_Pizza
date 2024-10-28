import React from "react";
import Location from "/components/icons/Location";
import Dollar from "/components/icons/Dollar";
import Link from "next/link";

const CardFood = (props) => {
  const { id, name, price, details } = props;

  return (
    <div className="cardfood mb-8">
      <img key={id}
        src={`/images/${id}.jpeg`}
        alt={name}
        className="w-[250px] rounded-[5px] max-[768px]:w-full"
      />
      <div className="details flex items-center mt-3 justify-between   text-[1rem]  text-gray-800">
        <h4 className="font-bold" key={id}>{name}</h4>
        <div className="font-bold" key={id}>{details[0].Cuisine}</div>
      </div>
      <div className="price flex justify-between flex-row-reverse  mt-3 items-center">
        <span key={id}>{price}$</span>
        <Link
          href="/"
          className="bg-[#53c60b] text-[#fff] w-fit px-2 py-2 rounded-lg"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default CardFood;
