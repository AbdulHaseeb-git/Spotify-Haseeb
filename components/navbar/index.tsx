import React from "react";
import Logo from "./Logo";
import { GoHome } from "react-icons/go";
import SearchInput from "./SearchInput";
import {  IoArrowDownOutline, IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* 1  */}
      <Logo />
      {/* 2  */}
      <div className="flex items-center gap-2">
        <div className="text-2xl rounded-full hover:scale-105 bg-foreground p-2.5">
          <GoHome />
        </div>
        <SearchInput />
      </div>

      {/* 3  */}
      <div className="flex items-center gap-6">
        <button className="hidden lg:inline px-3 py-1.5 bg-white text-black text-sm font-bold rounded-full">Explore Premium</button>
        <div className="hidden lg:flex items-center gap-1.5 text-white">
            <div className="rounded-full text-lg font-bold border-2">
                <IoArrowDownOutline/>
            </div>
            <span className="font-semibold text-xs">Install App</span>
        </div>
        <IoNotificationsOutline className="text-xl"/>
        <Image className="rounded-full" alt="User Pic" width={40} height={40} src={'https://github.com/AbdulHaseeb-git.png'}/>
      </div>
    </div>
  );
};

export default Navbar;
