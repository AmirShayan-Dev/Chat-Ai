import React from "react";
import LogoImage from "../../Images/LogoChatAi.png";
import "../../../App.css";

export default function Login() {
  return (
    <>
      <img src={LogoImage} alt="Logo" className="w-16 h-16 ml-8 mt-16" />
      <h1 className="font-bricolage text-2xl font-bold">
        Login to your account
      </h1>
    </>
  );
}
