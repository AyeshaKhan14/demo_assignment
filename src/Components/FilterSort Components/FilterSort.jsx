import React from "react";
import { Filter } from "./Filter";
import { Sort } from "./Sort";

export const FilterSort = ({ product, onCategoryChange, onSortChange }) => {
  return (
    <div className='w-full h-[90px] py-2 md:h-[55px] flex flex-col gap-4 justify-center md:flex-row items-center md:justify-around bg-black'>
      <Filter product={product} onCategoryChange={onCategoryChange} />
      <Sort product={product} onSortChange={onSortChange} />
    </div>
  );
};
