import React from "react";
import Header from "./sample_products/Header/Header";
import ProductOverview from "./sample_products/ProductOverview/ProductOverview";
import Banner from "./sample_products/Banner/Banner";
import Footer from "./sample_products/Footer/Footer";
import NewsLetter from "./sample_products/NewsLetter/NewsLetter";
import Products from "./sample_products/Product/Products";
import ProductsSlider from "./sample_products/Slider/ProductsSlider";
const Bahay = () => {
  return (
    <>
      <Header />
      <ProductOverview />
      <Products />
      <Banner />
      <ProductsSlider />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Bahay;
