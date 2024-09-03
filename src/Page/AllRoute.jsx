import React from "react";
import { Route, Routes } from "react-router-dom";
import { SinglePage } from "../Components/ProductList Component/SinglePage";
import { Home } from "./Home";

export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<SinglePage />} />
      </Routes>
    </>
  );
};
