import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../App.css";
import { Pagination, Navigation } from "swiper/modules";
import { ProductImage1, ProductImage2 } from "./ProductImage";
import { Link } from "react-router-dom";

export default function App() {
  const swiperRef = useRef(null);

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <section className="flex justify-between w-full mx-20 mb-5 items-center max-sm:w-full max-sm:mx-auto max-sm:px-5">
        <div>
          <h1> Products we are proud of</h1>
        </div>
        <div className="flex w-[280px]  py-2 gap-2 max-sm:w-auto">
          <button
            onClick={prevSlide}
            className=" btn-md bg-black text-white text-2xl font-extrabold  rounded-sm"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className=" btn-md bg-black text-white text-xl  rounded-sm"
          >
            &#8594;
          </button>
        </div>
      </section>
      <div className="carousel-container rounded-box mx-20 max-sm:w-[700px] max-sm:mx-auto max-sm:px-5">
        <Swiper
          ref={swiperRef}
          effect={"slide"}
          speed={800}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={4} // Number of slides to show at a time
          spaceBetween={10} // Space between slides
        >
          {ProductImage1.map(img1 => (
            <SwiperSlide
              key={img1.id}
              className="carousel-item border-[1px] border-[#cbcbcb] max-sm:h-[250px] max-sm:w-[100px]"
            >
              <Link to={`/product-page/${img1.name}`}>
                <img
                  src={img1.src}
                  className="object-contain w-[300px] h-[300px]  max-sm:w-[500px] max-sm:h-[150px]"
                  alt=""
                />
                <p className="ml-5 text-xl mt-2 max-sm:overflow-hidden">
                  {img1.name}
                </p>
                <p className="ml-5 mb-1 text-lg font-bold">{img1.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
