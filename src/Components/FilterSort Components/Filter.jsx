import React from "react";

export const Filter = ({ product, onCategoryChange }) => {
  const uniqueCategories = [
    "All Categories",
    ...new Set(product.map((el) => el.category)),
  ];
  return (
    <div className='w-[50%] flex items-center justify-center'>
      <div className='md:w-[30%] bg-zinc-100 border border-gray-500 flex items-center gap-2 p-1 px-2 rounded-full'>
        <select
          className='shadow-sm bg-zinc-100 bottom-0 text-black rounded-md text-sm block w-full focus:outline-none'
          onChange={onCategoryChange}
        >
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
