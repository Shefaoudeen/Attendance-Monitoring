import React from "react";
import student from "../Records/data";

const styling = {
  height: "calc(100vh - 175px)",
};

const Attendance = () => {
  return (
    <div style={styling}>
      <div className="w-full flex justify-around py-1 bg-gray-300">
        <button className="border-none bg-white px-2 rounded-md">Sub 1</button>
        <button className="border-none bg-white px-2 rounded-md">Sub 2</button>
        <button className="border-none bg-white px-2 rounded-md">Sub 3</button>
        <button className="border-none bg-white px-2 rounded-md">Sub 4</button>
      </div>
      <div className="flex justify-center items-center mt-3 pb-[75px]">
        <div className="grid grid-cols-2 gap-5 px-3 w-[400px]">
          {student.map((stud) => (
            <div className="text-center border-2 bg-gray-50 drop-shadow-lg rounded-xl">
              <img
                src={stud.image}
                className="rounded-tr-xl rounded-tl-xl object-cover"
              />
              <h1 className="font-bold text-xl">{stud.name}</h1>
              <p className=" text-sm">{stud.regno}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="fixed bottom-0 mt-4 text-center w-full bg-gray-300 py-2 font-semibold">
        &#169; Shefa 2024
      </footer>
    </div>
  );
};

export default Attendance;
