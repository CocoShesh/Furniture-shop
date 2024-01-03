import React from "react";
import Header from "../sample_products/Header/Header";
import ProductPage from "../pages/Product-page/ProductPage";
import Footer from "../sample_products/Footer/Footer";
import NewsLetter from "../sample_products/NewsLetter/NewsLetter";

const Product_Page = () => {
  return (
    <div className="h-full">
      <Header />
      <div className=" pt-44">
        <ProductPage />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product_Page;
