import React from "react";
import LogoImage from "../../Images/LogoChatAi.png";
import "../../../App.css";

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
    </>
  );
}
