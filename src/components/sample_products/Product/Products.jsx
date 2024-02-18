import React from "react";
import data from "./data";
import { Link } from "react-router-dom";
function Products() {
  const limitedData = data.slice(0, 8);
  return (
    <div>
      <div className="mx-5  px-4 py-16 sm:px-6 sm:py-24  xs:px-0  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products we are proud of
        </h2>

        <div className="mt-6 grid lg:grid-cols-4  max-lg:grid-cols-3  gap-x-6 gap-y-10  sm:grid-cols-1  md:grid-cols-2  2xl:grid-cols-5  xs:grid-cols-1  xl:gap-x-8">
          {limitedData.map(product => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border-2 lg:aspect-none group-hover:opacity-75 lg:h-80 2xl:h-auto">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-cover object-center lg:h-full lg:w-auto 2xl:w-full 2xl:h-fit "
                />
              </div>
              <div className="mt-4 flex justify-between max-sm:flex-col">
                <div>
                  <h3 className=" text-gray-700  w-[150px] text-[18px] font-semibold">
                    <Link to={`/product-page/${product.name}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-xl font-bold  mr-1 text-red-500">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
