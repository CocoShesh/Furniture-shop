import React, { useState } from "react";
import { category, products } from "./Data";
import { Segmented } from "antd";

const Categories = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter(product => {
    if (filter === "All") {
      return true;
    } else {
      return product.categ === filter;
    }
  });

  return (
    <div className="mx-32 mb-20 pb-20 max-md:m-auto max-md:w-full max-lg:w-full max-lg:mx-auto max-lg:px-10">
      <div className="flex w-full max-md:w-auto max-md:ml-5">
        <p className="text-xl font-bold cursor-pointer">
          <a href="/">
            <span className="text-slate-500 mr-1 cursor-pointer">&lt; </span>{" "}
            Home{" "}
          </a>
        </p>
      </div>
      <h1 className="text-center font-sans text-2xl font-bold uppercase">
        {" "}
        {filter}{" "}
      </h1>
      <section className="flex gap-3 items-center justify-center mt-10 max-md:mx-2   ">
        <Segmented
          options={[
            "All",
            "Furnitures",
            "Electronics",
            "Kitchen",
            "Chairs",
            "Lamps",
            "Skin Care",
          ]}
          value={filter}
          onChange={setFilter}
          className=" text-xl font-sans font-semibold bg-red-300 max-md:w-autp max-md:flex max-md:items-center max-md:text-[10px]  max-md:px-3 max-md:py-2 max-md:rounded-full max-md:font-bold max-md:uppercase "
        />
      </section>

      <section className="grid grid-cols-4 mt-20 gap-5 w-full max-md:grid-cols-2 max-md:w-full max-md:items-center max-md:justify-center  max-md:px-3 ">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="border-2 p-5 max-md:h-full max-md:p-auto  "
          >
            <img
              src={product.src}
              alt={product.name}
              className="h-[300px]    max-md:h-[300px] max-md:object-contain max-lg:object-contain"
            />
            <p className="mt-5  ">{product.name}</p>
            <p className="font-bold text-red-500 ">{product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Categories;
