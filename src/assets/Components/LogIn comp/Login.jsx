import React from "react";
import LogoImage from "../../Images/LogoChatAi.png";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import EmailIcon from "../../Images/Email-Icon.png";
import PassIcon from "../../Images/First.png";
import HideShow from "../../Images/HideShow.png";
import Google from "../../Images/googleImage.png";
import Facebook from "../../Images/FacebookImage.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col gap-y-3 flex-grow">
        {/* LOGO */}
        <div className="pl-7 pt-12">
          <img src={LogoImage} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Title and text */}
        <div className="pl-7 pt-5">
          <h1 className="font-bricolage text-4xl w-60 font-bold">
            Login to your account
          </h1>
          <h5 className="font-bricolage font-normal text-gray-700 text-base mt-4">
            Don’t have an account?{" "}
            <span className="font-bricolage font-semibold text-emerald-500 text-base">
              Sign Up
            </span>
          </h5>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-y-4 w-full mt-4 justify-center items-center">
          {/* Email Input */}
          <div className="flex items-center w-[90%] h-[56px] border border-[#EBEDEC] rounded-2xl pl-3">
            <img src={EmailIcon} alt="Email Icon" className="w-6 h-6 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center w-[90%] h-[56px] border border-[#EBEDEC] rounded-2xl px-4 bg-transparent mx-auto">
            <img src={PassIcon} alt="Pass Icon" className="w-6 h-6 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 outline-none bg-transparent"
            />
            <img src={HideShow} alt="Hide or show" className="w-6 h-6 mr-3" />
          </div>
        </div>

        {/* Forgot Password */}
        <div>
          <h5 className="text-emerald-500 text-base font-bricolage text-right pr-4">
            Forgot Password?
          </h5>
        </div>

        {/* Login Button */}
        <div className="w-full flex justify-center items-center">
          <button
            className="w-[90%] h-[56px] bg-emerald-500 text-white font-bricolage rounded-full"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full mt-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h5 className="px-4 text-gray-500 font-bricolage">Or login with</h5>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google & Facebook Buttons */}
        <div className="flex justify-center items-center mt-4 gap-4">
          <button className="flex items-center justify-center w-[150px] h-[56px] rounded-lg">
            <img src={Google} alt="Google" />
          </button>
          <button className="flex items-center justify-center w-[150px] h-[56px] rounded-lg">
            <img src={Facebook} alt="Facebook" />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center items-center py-4">
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Terms of use
        </a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          Privacy policy
        </a>
      </div>
    </div>
  );
}
