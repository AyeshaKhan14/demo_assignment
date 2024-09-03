import React from "react";
import { FaSearch } from "react-icons/fa";

export const NavBar = ({ onSearchChange, searchQuery }) => {
  return (
    <div className='w-full h-[60px] sticky top-0 flex items-center justify-center bg-[#e8183bd7]'>
      <div className='w-[95%] md:w-[90%] h-full flex items-center justify-between '>
        <div className='font-extrabold text-xl'>SHOPPERS STOP</div>

        {/* search by product */}
        <div className='w-[50%] md:w-[40%] h-[40px] border flex items-center gap-2 p-1 px-2 rounded-full bg-slate-100'>
          <FaSearch />
          <input
            className='shadow-sm bg-slate-100  placeholder:text-gray-600 font-medium rounded-md text-md block w-full focus:outline-none'
            value={searchQuery}
            onChange={onSearchChange}
            placeholder='Search By products'
          />
        </div>
      </div>
    </div>
  );
};
