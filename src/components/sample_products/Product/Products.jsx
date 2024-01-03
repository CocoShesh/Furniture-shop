import React from "react";
import data from "./data";
import { Link } from "react-router-dom";
function Products() {
  const limitedData = data.slice(0, 8);
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products we are proud of
        </h2>

        <div className="mt-6 grid lg:grid-cols-4  max-lg:grid-cols-3  gap-x-6 gap-y-10 max-sm:grid-cols-2 max-md:grid-cols-3   xl:gap-x-8">
          {limitedData.map(product => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border-2 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-auto"
                />
              </div>
              <div className="mt-4 flex justify-between">
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
