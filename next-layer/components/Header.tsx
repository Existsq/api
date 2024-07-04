import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="justify-center shadow-lg align-center px-5 py-4 bg-white text-black sticky">
      <div className="flex flex-row justify-between align-middle gap-3">
          <div className="flex justify-center align-middle">
            <GiHamburgerMenu size="25" className="align-middle justify-center"/>
          </div>
        <div className="flex flex-row justify-between align-middle w-full">
          <p className="text-2xl font-medium">Home</p>
          <div className="flex flex-row justify-center align-middle v-al w-fit gap-3">
            <IoNotificationsOutline size="25" className="flex justify-center align-middle"/>
            <IoCartOutline size="25" className="align-middle"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
