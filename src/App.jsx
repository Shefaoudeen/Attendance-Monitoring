import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Attendance from "./Pages/Attendance";
import Internal from "./Pages/Internal";
import StudentProfile from "./Pages/StudentProfile";
import "../server";

const App = () => {
  return (
    <div className="flex flex-col relative">
      <BrowserRouter>
        <header className="flex justify-between text-sm px-4 py-6 bg-gray-300 relative w-full items-center">
          <div>
            <Link to="/" className="bg-white p-1.5 rounded-lg">
              ECE-B Attendance
            </Link>
          </div>
          <div className="flex w-[45%] justify-around">
            <Link to="/attendance" className="bg-white p-1.5 rounded-lg">
              Attedance
            </Link>
            <Link to="/internal" className="bg-white p-1.5 rounded-lg">
              Internals
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/attendance/:id" element={<StudentProfile />} />
          <Route path="/internal" element={<Internal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
