import React from "react";
import { Attendance } from "../assets";

const styling = {
  height: "calc(100vh - 175px)",
};

const Home = () => {
  return (
    <div
      className=" bg-blue-200 h-screen flex flex-col justify-center items-center relative leading-10"
      style={styling}
    >
      <h1 className="font-extrabold">COMING SOON</h1>
      <div className="border-none border-black p-2 rounded-xl bg-gray-300 text-white drop-shadow-xl z-10">
        <div className="text-3xl text-center font-extrabold z-10">
          <h1 className="">Attendance Monitoring</h1>
          <h1>Web App</h1>
        </div>
        <p className="z-10 text-gray-500">
          Track Your Attendance closely, Reach Your Goal Wisely
        </p>
      </div>
      <h1 className="z-10 font-extrabold">WEBSITE UNDER CONSTRUCTION</h1>
      {/*
      <h1 className="z-10 text-xl font-bold">DEVELOPED BY</h1>
      <h1 className="z-10 text-3xl font-extrabold">SHEFAOUDEEN</h1>
      <div className="z-10 text-2xl flex w-[50%] justify-around">
        <i className="fa fa-github"></i>
        <i className="fa fa-envelope"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div> */}
      <img src={Attendance} width={250} className="absolute bottom-0 left-0" />
    </div>
  );
};

export default Home;
