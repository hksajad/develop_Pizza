import MenuPage from "@/components/templates/MenuPage/MenuPage";
import React from "react";

const Menu = () => {
  return (
    <div className="container max-w-[900px] m-auto mt-[100px]">
      <div className="title_menu">
        <h1 className="border-b-[3px]  border-[#53c60b] w-fit text-[25px] font-bold text-gray-700">
          menu
        </h1>
      </div>
      <MenuPage/>
    </div>
  );
};

export default Menu;

