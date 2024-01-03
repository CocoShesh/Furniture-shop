import React, { useState, useContext, useRef, useEffect } from "react";
import { Button, Drawer, Tooltip, Badge } from "antd";
import { BsCartFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import CartContext from "../../../CartContext";

function AddToCart() {
  const { cartItems, setCartItems, deleteItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const bsCartFillRef = useRef(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleDeleteItem = itemid => {
    deleteItem(itemid);
  };

  return (
    <div>
      <section className="flex relative">
        <Badge count={cartItems.length}>
          <Tooltip title="Open Cart" color="#D81414">
            <BsCartFill
              ref={bsCartFillRef}
              className="text-[22px] hover:scale-125 cursor-pointer"
              onClick={showDrawer}
            />
          </Tooltip>
        </Badge>
      </section>
      <Drawer
        title={
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Your Shopping Cart ({cartItems.length})
          </div>
        }
        placement="right"
        onClose={onClose}
        visible={open}
        width={600}
      >
        {cartItems.length > 0 ? (
          <section className="grid grid-cols-4 ml-5 gap-5 mb-10 font-bold font-sans text-xl text-slate-500 text-center">
            <div className="border-2">Product</div>
            <div className="border-2">Name</div>
            <div className="border-2">Price</div>
            <div className="border-2">Action</div>
          </section>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-y-5">
            <img
              src="https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png"
              className="h-[150px]"
              alt=""
            />
            <h1 className="font-bold font-sans text-xl">
              Explore our products and add to your cart!
            </h1>
            <a href="/product-page">
              <button className="w-[150px] h-[50px] bg-base-200  rounded-sm uppercase tracking-wider font-bold font-sans text-lg hover:bg-blue-500 hover:text-white">
                Shop Now
              </button>{" "}
            </a>
          </div>
        )}

        {cartItems.map(item => (
          <div
            key={item.id}
            className="grid grid-cols-4 ml-5 text-center gap-5 items-center mb-10"
          >
            <div>
              <img src={item.src} alt="" className="w-[200px] h-[150px]" />
            </div>
            <div>
              <p className="text-lg font-sans font-bold">{item.name}</p>
            </div>
            <div>
              <p className="font-[900] text-xl font-sans text-red-500">
                ${item.price}
              </p>
            </div>

            <div className="text-3xl flex justify-center gap-5 items-center">
              <Tooltip title="Edit">
                <MdEditSquare />
              </Tooltip>
              <Tooltip title="Delete">
                <RiDeleteBin2Fill
                  onClick={() => handleDeleteItem(item.id)}
                  className="cursor-pointer"
                />
              </Tooltip>
            </div>
            <div className="flex  flex-col">
              <div className=" border-dashed border-black border-b-2 w-[520px]"></div>{" "}
              <div className=" flex   w-[520px] mt-5 items-center justify-between">
                <div className="text-left ">
                  <h1 className="text-4xl font-bold font-mono mt-2">
                    {" "}
                    Subtotal
                  </h1>
                  <p className="text-3xl text-red-500 font-bold font-mono">
                    ${item.price}
                  </p>
                </div>
                <div>
                  <button className=" w-[200px] h-[50px] border-[1px] border-black font-bold font-sans text-xl hover:bg-red-500 cursor-pointer hover:text-white hover:scale-y-110">
                    {" "}
                    Go to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Drawer>
    </div>
  );
}

export default AddToCart;
