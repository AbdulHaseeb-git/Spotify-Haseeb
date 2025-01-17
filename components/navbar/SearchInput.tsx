import React from "react";
import { BiBox } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className="bg-foreground py-2.5 px-4 rounded-full text-2xl flex justify-between">
      <div className="flex items-center gap-2">
        <IoIosSearch />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="md:inline hidden outline-none font-semibold w-96 bg-transparent placeholder:text-[14px] text-[14px]"
        />
        <div className="w-[1px] h-5 bg-white/30" />
        <BiBox />
      </div>
    </div>
  );
};

export default SearchInput;
