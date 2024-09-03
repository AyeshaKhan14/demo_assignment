import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/data.js";

export const SinglePage = () => {
  const { id } = useParams();
  const nos = Number(id);

  const data = products.find((el) => {
    return el.id === nos;
  });

  return (
    <div className='w-full h-auto'>
      <div className='border-2 border-gray-200 rounded-md bg-slate-100 w-[50%] p-4 m-auto flex flex-col  items-center gap-4'>
        <div className='w-full'>
          <img
            className='w-full h-auto object-cover'
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className='flex text-center flex-col gap-2'>
          <h1 className='text-2xl font-bold'>{data.name}</h1>
          <p className='text-lg'>{data.description}</p>
          <p className='text-xl font-semibold'>{data.price}</p>
        </div>
      </div>
    </div>
  );
};
