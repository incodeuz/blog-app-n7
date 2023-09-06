import React from "react";
import { message } from "antd";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center">
      <div className="max-w-[600px] w-full mx-auto">
        <div className="relative flex items-center justify-center mb-[50px]">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 border-[1px] border-black w-[35px] h-[35px] flex items-center justify-center rounded-[100px]"
          >
            ←
          </button>
          <h1 className=" text-[25px] text-center font-bold ">Sign In</h1>
        </div>

        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your username
          </label>
          <input
            type="text"
            id="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="@example"
            required
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div>
          <p className="text-[18px] my-5">
            If you haven't an account?
            <Link
              to="/sign-up"
              className="text-blue-500 underline font-semibold p-3"
            >
              Register new account
            </Link>
          </p>
        </div>

        <button
          onClick={() => message.success("Success")}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
