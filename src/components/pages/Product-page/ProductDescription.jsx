import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../../sample_products/Product/data";
import Products from "../../sample_products/Product/Products";
function ProductDescription() {
  const { productName } = useParams();
  const product = useMemo(
    () => data.find(item => item.name === productName),
    [productName]
  );

  return (
    <div>
      <section className="flex justify-between mt-20 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
        <section className="w-[380px] h-[100px] bg-base-200 p-5">
          <h1 className="text-2xl font-bold font-sans "> Texture:</h1>
          <p className="font-sans text-lg"> {product.Texture}</p>
        </section>
        <section className="w-[380px] h-[100px] bg-base-200  p-5">
          <h1 className="text-2xl font-bold font-sans">Weight:</h1>
          <p className="font-sans text-lg"> {product.Weight} </p>
        </section>
        <section className="w-[380px] h-[100px] bg-base-200  p-5">
          <h1 className="text-2xl font-bold font-sans"> Size:</h1>
          <p className="font-sans text-lg">{product.Size} </p>
        </section>
      </section>
      <Products />
    </div>
  );
}

export default ProductDescription;
