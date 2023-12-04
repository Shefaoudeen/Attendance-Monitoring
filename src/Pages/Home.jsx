import React from "react";
import { Attendance } from "../assets";

const styling = {
  height: "calc(100vh - 175px)",
};

const Home = () => {
  return (
    <div
      className="  h-screen flex flex-col justify-center items-center relative leading-10"
      style={styling}
    >
      <h1 className="font-extrabold">COMING SOON</h1>
      <div className="border-none border-black p-2.5 rounded-xl mx-2 bg-blue-400 text-white drop-shadow-2xl z-10">
        <div className="text-3xl text-center font-extrabold z-10">
          <h1 className="">Attendance Monitoring</h1>
          <h1>Web App</h1>
        </div>
        <div className="leading-6">
          <p className="z-10 text-gray-500 text-center">
            Track Your Attendance closely
          </p>
          <p className="z-10 text-gray-500 text-center">
            Reach Your Goal Wisely
          </p>
        </div>
      </div>
      <h1 className="z-10 font-extrabold">WEBSITE UNDER CONSTRUCTION</h1>
      <img
        src={Attendance}
        className="absolute bottom-0 left-0 w-[450px] lg:-mb-[50px] max-sm:w-[250px]"
      />
      <footer className="fixed bottom-0 text-center w-full bg-gray-300 py-2 font-semibold">
        &#169; Shefa 2024
      </footer>
    </div>
  );
};

export default Home;
