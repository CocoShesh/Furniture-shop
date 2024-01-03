import React from "react";
import SignUp from "./Login";
import { Carousel } from "antd";

const contentStyle = {
  height: "700px",
  width: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function App() {
  return (
    <>
      <section className="flex items-center justify-center my-2 rounded-lg border-2 mx-auto shadow-xl w-[1200px] max-sm:w-full max-sm:flex-col ">
        <section className="max-sm:hidden">
          <Carousel autoplay className="w-[700px]  " effect="fade">
            <div>
              <img
                src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-rush-running-delivering-package-customer-isolated-grey-studio-background-copy-space_1258-1211.jpg?w=2000"
                alt=""
                className="h-[610px]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-red-cloth-holding-box-package-isolated-grey-studio-background-copy-space_1258-1216.jpg?w=2000"
                alt=""
                className="h-[610px]"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/delivery-concept-portrait-happy-african-american-delivery-man-pointing-hand-present-box-package-isolated-grey-studio-background-copy-space_1258-1263.jpg"
                alt=""
                className="h-[610px]"
              />
            </div>
          </Carousel>
        </section>
        <section className="w-[500px] ">
          <SignUp />
        </section>
      </section>
    </>
  );
}
