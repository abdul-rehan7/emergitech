import React from "react";
import { FiInfo } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import Dropdown from "@/components/Dropdown"

export default function Topnav() {
  return (
    <div className="bg-[#131720] h-[7vh] flex items-center justify-between">
      <div className="first pl-5">
        <img src="/icon.png" alt="" className="h-[1.4rem] w-[1.4rem]" />
      </div>
      <div className="second ">
      <Dropdown />
        
      </div>
      <div className="third flex items-center text-sm font-semibold h-full">
        <span className="px-4 flex space-x-2 items-center">
          <FiInfo className="mx-2 text-sm" /> Help{" "}
        </span>
        <span className="bg-[#2C60DE] flex items-center h-[7vh] px-5 ">
          + Add Comments
        </span>
      </div>
    </div>
  );
}
