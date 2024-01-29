import React, { useState, useMemo, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../../sample_products/Product/data";
import Rating from "../../sample_products/Ratings/Rating";
import Products from "../../sample_products/Product/Products";
import CartContext from "../../../CartContext";
import { Button, message } from "antd";
import ProductDescription from "./ProductDescription";
function Product_Page() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Item successfully added to your shopping cart.",
      className: "custom-class",
      style: {
        fontSize: "15px",
        fontFamily: "monospace",
        fontWeight: "bold",
      },
    });
  };
  const { addToCart } = useContext(CartContext);
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => data.find(item => item.name === productName),
    [productName]
  );

  useEffect(() => {
    if (product) {
      const price = parseFloat(product.price.replace("$", ""));
      setTotalAmount(quantity * price);
    }
  }, [quantity, product]);

  const [totalAmount, setTotalAmount] = useState(0);

  if (!product) {
    return <Products />;
  }

  // Handle addToCart with calculated totalAmount
  const handleAddToCart = () => {
    const price = parseFloat(product.price.replace("$", ""));
    const itemTotal = quantity * price;
    const itemToAdd = {
      id: product.id, // Include the product ID if available
      name: product.name,
      price: itemTotal,
      src: product.imageSrc,
      alt: product.imageAlt,
      // Include other details if needed (e.g., ID, description, etc.)
    };

    // Get the current cart items from localStorage
    const currentCartItems =
      JSON.parse(window.localStorage.getItem("cart")) || [];

    // Add the new item to the existing items
    const updatedCartItems = [...currentCartItems, itemToAdd];

    // Update the cart in localStorage
    window.localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    // Update the context state (addToCart function) to reflect the change
    addToCart(itemToAdd);
  };

  return (
    <div className=" text-gray-900  ">
      {contextHolder}
      <h2 className="text-center text-5xl mb-10  text-gray-900 max-sm:text-4xl">
        {product.name}
      </h2>
      <div className="hero min-h-auto lg:px-10  border ">
        <div className="hero-content flex-col lg:flex-row p-0 max-sm:max-w-xs">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="max-w-xs rounded-lg "
          />
          <div className="max-sm:max-w-xs  max-lg:max-w-2xl max-sm:px-4">
            <h1 className="text-5xl font-bold">Description</h1>
            <p className="py-6 text-justify">{product.Description}</p>

            <section className="flex max-sm:flex-col items-center gap-10 mt-10">
              <p className="font-bold text-2xl"> Quantity</p>
              <section className="flex">
                <div
                  className="w-[50px] h-[50px] border-[1px] text-4xl text-center cursor-pointer bg-white border-black "
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  &#8722;
                </div>
                <input
                  type="text"
                  readOnly
                  value={quantity}
                  className="w-[50px] h-[50px] border-[1px] text-3xl text-center bg-white outline-none  border-black"
                />
                <div
                  className="w-[50px] h-[50px] border-[1px] text-4xl text-center cursor-pointer bg-white border-black"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  &#43;
                </div>
              </section>
              <p className="font-bold text-2xl">${totalAmount}</p>
            </section>
            <section className="flex mt-10 justify-end gap-5" onClick={success}>
              <button
                className="w-[200px] h-[50px] border-[1px] border-black font-bold text-2xl hover:bg-black hover:text-white hover:scale-110"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button className="w-[200px] h-[50px] border-[1px] border-black font-bold text-2xl text-white bg-[#b6002c] hover:bg-transparent hover:scale-110 hover:text-red-700">
                Buy Now
              </button>
            </section>
          </div>
        </div>
      </div>
      <section>
        <ProductDescription />
      </section>
    </div>
  );
}

export default Product_Page;
