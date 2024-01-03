import React from "react";
import Bahay from "./components/Bahay";
import Login from "./components/Login-user/ImageCarousel";
import SignUp from "./components/Login-user/SIgnUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/page/Product_Page";
import Categories from "./components/page/Categories";
import { ProductProvider } from "./components/sample_products/Product/ProductProvider";
import { CartProvider } from "./CartContext";
import { FloatButton } from "antd";

function App() {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Bahay />} />

            <Route exact path="/product-page" element={<ProductPage />} />
            <Route
              path="/product-page/:productName"
              element={<ProductPage />}
            />

            <Route path="/product-page/" element={<ProductPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
      <FloatButton.BackTop />
    </Router>
  );
}

export default App;
