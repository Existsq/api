import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";


function Header() {
  return (
    <div className="mx-4 py-4 bg-white text-black">
      <div className="flex flex-row justify-around align-middle">
          <div className="flex justify-center align-middle">
            <GiHamburgerMenu />
          </div>
        <div className="flex flex-row justify-around align-middle w-full">
          <p>Home</p>
          <div className="flex flex-row justify-center align-middle w-fit">
            <IoNotificationsOutline />
            <IoCartOutline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
