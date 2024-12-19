import React from "react";
import LogoImage from "../../Images/LogoChatAi.png";
import "../../../App.css";
import EmailIcon from "../../Images/Email-Icon.png";
import PassIcon from "../../Images/First.png";
import HideShow from "../../Images/HideShow.png";

export default function Login() {
  return (
    <>
      <img src={LogoImage} alt="Logo" className="w-16 h-16 ml-8 mt-16" />
      <h1 className="font-bricolage text-4xl w-60 font-bold">
        Login to your account
      </h1>
      <h5 className="font-bricolage font-normal text-gray-700 text-base">
        Don’t have an account?{" "}
        <span className="font-bricolage font-semibold text-emerald-500 text-base">
          Sign Up
        </span>
      </h5>

      {/* Email Input */}
      <div className="flex items-center w-[364px] h-[56px] border border-[#EBEDEC] rounded-2xl px-4 bg-transparent">
        <img src={EmailIcon} alt="Email Icon" className="w-6 h-6 mr-3" />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      {/* Password Input */}
      <div className="flex items-center w-[364px] h-[56px] border border-[#EBEDEC] rounded-2xl px-4 bg-transparent">
        <img src={PassIcon} alt="Pass Icon" className="w-6 h-6 mr-3" />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 outline-none bg-transparent"
        />
        <img src={HideShow} alt="Hide or show" className="w-6 h-6 mr-3" />
      </div>
    </>
  );
}
