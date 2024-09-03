import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ el }) => {
  return (
    <div className='border border-gray-200 bg-zinc-100 rounded-md flex flex-col gap-2  items-center'>
      <Link
        to={`/products/${el.id}`}
        className='flex flex-col justify-center items-center'
      >
        <div className='w-full md:w-[80%] h-[320px]'>
          <img className='h-full w-full' src={el.image} alt='' />
        </div>
        <div className='flex flex-col gap-2 '>
          <p className='text-center font-bold md:text-xl'>{el.name}</p>
          <p className='text-center'>{el.description}</p>
          <p className='text-center font-bold'>{el.price}</p>
        </div>
      </Link>
    </div>
  );
};
