import React from "react";
import { Image } from "antd";
import "./style.css";

const products = [
  {
    id: 1,
    src: "https://minimalist-e-commerce.vercel.app/static/media/home-img-1.3de7da0f1e4634169c62.jpg",
    alt: "Two each of gray, white, and black shirts laying flat.",
  },
  {
    id: 2,
    src: "https://minimalist-e-commerce.vercel.app/static/media/home-img-3.60734311499ba1dbbc41.jpg",
    alt: "Model wearing plain black basic tee.",
  },
  {
    id: 3,
    src: "https://minimalist-e-commerce.vercel.app/static/media/home-img-4.672d1d0d7656e2a778f6.jpg",
    alt: "Model wearing plain gray basic tee.",
  },
  {
    id: 4,
    src: "https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg",
    alt: "Model wearing plain white basic tee.",
  },
];

export default function ImageGallery() {
  return (
    <>
      <section className="main max-w-fit pt-28  mx-auto max-xl:mx-3">
        <div className="first  ">
          <img
            src={products[0].src}
            alt=""
            className="  rounded-2xl   h-[530px]  object-cover bg-black opacity-90 brightness-[.6] hover:brightness-[.5] transition duration-500 ease-in-out cursor-pointer"
          />
        </div>
        <div className="second  ">
          <img
            src={products[3].src}
            alt=""
            className="object-cover   w-full  h-[530px]   rounded-2xl brightness-[.6] hover:brightness-[.5] transition duration-500 ease-in-out cursor-pointer"
          />
        </div>
        <div className="third ">
          <img
            src={products[1].src}
            alt=""
            className="   object-cover  w-full h-[260px]  rounded-2xl brightness-[.6] hover:brightness-[.5] transition duration-500 ease-in-out cursor-pointer"
          />
        </div>
        <div className="fourth ">
          <img
            src={products[2].src}
            alt=""
            className="  object-cover   w-full h-[260px]   rounded-2xl brightness-[.6] hover:brightness-[.5] transition duration-500 ease-in-out cursor-pointer"
          />
        </div>
      </section>
    </>
  );
}
