import React from "react";

export const Sort = ({ onSortChange }) => {
  return (
    <div className='w-[90%] md:w-[50%] text-zinc-100 flex gap-2'>
      <span>Sort by :</span>
      <div className='flex items-center justify-center gap-2'>
        {" "}
        <label className='flex items-center justify-center gap-2'>
          <input type='radio' name='sort' value='asc' onChange={onSortChange} />
          Low to High Price
        </label>
      </div>
      <div>
        {" "}
        <label className=' flex items-center justify-center gap-2'>
          <input
            type='radio'
            name='sort'
            value='desc'
            onChange={onSortChange}
          />
          High to Low Price
        </label>
      </div>
    </div>
  );
};
