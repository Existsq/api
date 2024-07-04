import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaTshirt } from "react-icons/fa";

function Categories() {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <div className="flex flex-row justify-between">
        <p className="text-black font-semibold text-lg">Categories</p>
        <button className="flex flex-row justify-center align-middle text-black opacity-50 font-base text-md">
          View All <IoIosArrowRoundForward size="25" />
        </button>
      </div>
      <div className="flex flex-row gap-5 align-center justify-between text-[#2D3644]">
        <button className="flex flex-col gap-1 justify-center align-middle text-center">
          <FaTshirt
            className="flex bg-[#ECFDF5] p-2 rounded-full"
            size={65}
            color="#23C9B5"
          ></FaTshirt>
          <p>Fashion</p>
        </button>
        <button className="flex flex-col gap-1 justify-center align-middle text-center">
          <FaTshirt
            className="flex bg-[#ECFDF5] p-2 rounded-full"
            size={65}
            color="#23C9B5"
          ></FaTshirt>
          <p>Fashion</p>
        </button>
        <button className="flex flex-col gap-1 justify-center align-middle text-center">
          <FaTshirt
            className="flex bg-[#ECFDF5] p-2 rounded-full"
            size={65}
            color="#23C9B5"
          ></FaTshirt>
          <p>Fashion</p>
        </button>
        <button className="flex flex-col gap-1 justify-center align-middle text-center">
          <FaTshirt
            className="flex bg-[#ECFDF5] p-2 rounded-full"
            size={65}
            color="#23C9B5"
          ></FaTshirt>
          <p>Fashion</p>
        </button>
      </div>
    </div>
  );
}

export default Categories;
