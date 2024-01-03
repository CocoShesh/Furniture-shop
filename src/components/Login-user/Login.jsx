import React from "react";
import { SiFacebook } from "react-icons/si";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";
import { Tooltip } from "antd";
const Login = () => {
  return (
    <div className="flex flex-col justify-center  px-6 py-8 lg:px-8 max-sm:w-auto max-sm:mx-5 ">
      <Tooltip title="Close">
        <a href="/" className="self-end">
          <span> &#10060;</span>
        </a>
      </Tooltip>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
        <p>Please Fill up the information below</p>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full h-[50px] justify-center rounded-md bg-indigo-600 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2 mt-10 ">
          <hr className="w-[170px] border-slate-200" />{" "}
          <p className="text-slate-400">OR </p>
          <hr className="w-[170px]  border-slate-200" />
        </div>
        <section className=" flex gap-2 mt-5 ">
          <section className="w-[130px] h-[50px]  cursor-pointer  text-white  bg-indigo-600 rounded-md flex justify-center items-center gap-2 font-bold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <SiFacebook className="text-2xl " />
            <p>Facebook</p>
          </section>

          <section className="w-[130px] h-[50px]  text-white  cursor-pointer  bg-indigo-600  rounded-md  flex justify-center items-center gap-2 font-bold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <AiFillGoogleCircle className="text-2xl " />
            <p>Google</p>
          </section>
          <section className="w-[130px] h-[50px] text-white   cursor-pointer   bg-indigo-600 flex  rounded-md  justify-center items-center gap-2 font-bold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <AiFillInstagram className="text-2xl " />
            <p>Instagram</p>
          </section>
        </section>
        <p className=" text-center mt-10 text-lg text-slate-400 ">
          Not a member?
          <a
            href="/SignUp"
            className="font-semibold leading-6 pl-1 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
