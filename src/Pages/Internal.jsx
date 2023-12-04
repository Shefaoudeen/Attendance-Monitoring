import React from "react";

const styling = {
  height: "calc(100vh - 175px)",
};

const Internal = () => {
  return (
    <div style={styling} className="flex justify-center items-center">
      <h1 className="text-2xl font-bold">PAGE UNDER CONSTUCTION</h1>
      <footer className="absolute bottom-0 text-center w-full bg-gray-300 py-2 font-semibold">
        &#169; Shefa 2024
      </footer>
    </div>
  );
};

export default Internal;
