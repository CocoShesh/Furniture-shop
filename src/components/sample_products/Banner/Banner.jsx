import React from "react";
import banner from "../../../assets/banner.jpg";
function Banner() {
  return (
    <div className="flex border-2 mx-10 mb-10 font-san font h-[500px] max-sm:w-full max-sm:flex-col-reverse max-sm:mx-auto max-sm:h-full max-lg:w-auto max-lg:mx-5   ">
      <section className="  bg-[#e9e9e9] pl-32 pr-10 pt-44 w-[600px] max-sm:w-auto max-sm:p-10  max-lg:w-auto max-lg:px-5">
        <h1 className=" font-semibold text-3xl mb-5 text-gray-800">
          Creative harmonious living
        </h1>
        <p className="lg:w-[350px] max-sm:max-w-xs mb-5 text-[18px]  text-gray-500">
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <a href="/product-page">
          <button className="w-[100px] h-[50px] bg-black text-white font-[600] text-[18px]">
            Shop Now
          </button>
        </a>
      </section>
      <section className="max-lg:w-full 2xl:max-w-auto">
        <img
          src={banner}
          alt={banner}
          className=" w-[675px] h-full max-lg:w-full  2xl:w-[2050px]  2xl:object-cover  max-lg:object-fill "
        />
      </section>
    </div>
  );
}

export default Banner;
