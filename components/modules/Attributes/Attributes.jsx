import React from "react";
import Choice from "/components/icons/Choice";
import Clock from "/components/icons/Clock";
import Fast from "/components/icons/Fast";
import Food from "/components/icons/Food";
const Attributes = () => {
  return (
    <div className="Attributes mt-[100px]">
      <h3 className="text-[1.5rem] text-[#53c60b]">Why us?</h3>
      <div className='subContainer flex justify-between mt-[20px] flex-wrap'>
        <div className="w-[150px] rounded-[5px] text-center  flex flex-col justify-center items-center p-[10px] max-[768px]:m-[5px]">
          <Fast />
          <p className="pt-[20px] text-gray-600 font-medium">Fast</p>
        </div>
        <div className="w-[150px] rounded-[5px] text-center  flex flex-col justify-center items-center p-[10px] max-[768px]:m-[5px]">
          <Food />
          <p className="pt-[20px] text-gray-600 font-medium">Best Restaurants</p>
        </div>
        <div className="w-[150px] rounded-[5px] text-center  flex flex-col justify-center items-center p-[10px] max-[768px]:m-[5px]">
          <Choice />
          <p className="pt-[20px] text-gray-600 font-medium">Your Choice</p>
        </div>
        <div className="w-[150px] rounded-[5px] text-center  flex flex-col justify-center items-center p-[10px] max-[768px]:m-[5px]">
          <Clock />
          <p className="pt-[20px] text-gray-600 font-medium">24-7</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
