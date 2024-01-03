import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Drawer } from "antd";
import AddToCart from "./AddToCart";
import "./ModalStyling.css";
function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center border-b-2 px-20 py-2 fixed top-0 left-0 right-0 z-20  bg-white max-sm:w-full max-sm:px-5">
          <section className="flex items-center justify-center gap-5 max-sm:w-auto">
            <Link to="/">
              <img src={logo} className="h-[90px]" alt="" />
            </Link>
            <Link
              to="/categories"
              className="font-mono font-bold uppercase text-[18px]  max-md:hidden  max-sm:hidden"
            >
              Categories
            </Link>
            <Link
              to="/product-page"
              className="font-mono font-bold uppercase text-[18px] max-md:hidden max-sm:hidden"
            >
              Product Page
            </Link>
          </section>
          <section className="flex gap-5 items-center ">
            <Link to="/login">
              <h3 className="font-sans text-[18px] font-bold cursor-pointer max-sm:hidden">
                Login
              </h3>
            </Link>

            <AddToCart />
            <GiHamburgerMenu
              className="text-2xl mt-1 xl:hidden lg:hidden"
              onClick={showDrawer}
            />
          </section>
        </nav>
        <div></div>
      </header>

      <Drawer placement="left" onClose={onClose} open={open}>
        <section className=" inline-grid gap-5 w-full items-center justify-center  mt-auto">
          <Link
            to="/categories"
            className="font-mono font-bold uppercase text-[25px]"
          >
            Categories
          </Link>
          <Link
            to="/product-page"
            className="font-mono font-bold uppercase text-[25px]"
          >
            Product Page
          </Link>
          <Link to="/login">
            <h3 className="font-sans text-[25px] font-bold cursor-pointer">
              Login
            </h3>
          </Link>
        </section>
      </Drawer>
    </>
  );
}

export default Header;
