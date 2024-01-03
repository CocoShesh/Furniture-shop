import React from "react";
import banner from "../../../assets/banner.jpg";
function Banner() {
  return (
    <div className="flex border-2 mx-20 mb-10 font-san font h-[500px] max-sm:w-full max-sm:flex-col-reverse max-sm:mx-auto max-sm:h-full max-lg:w-autp max-lg:mx-5 ">
      <section className="  bg-[#e9e9e9] pl-32 pr-10 pt-44 w-[600px] max-sm:w-auto max-sm:p-10  max-lg:w-auto max-lg:px-5">
        <h1 className=" font-semibold text-3xl mb-5">
          Creative harmonious living
        </h1>
        <p className="w-[350px] mb-5 text-[18px] ">
          RAOUF Products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <a href="/product-page">
          <button className="w-[100px] h-[50px] bg-black text-white font-[600] text-[18px]">
            Shop Now
          </button>
        </a>
      </section>
      <section className="max-lg:w-full">
        <img
          src={banner}
          alt={banner}
          className=" w-[650px] h-full max-lg:w-full  max-lg:object-cover"
        />
      </section>
    </div>
  );
}

export default Banner;
