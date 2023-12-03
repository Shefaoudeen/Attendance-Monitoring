import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <header className="flex justify-between text-sm px-4 py-6 bg-gray-300 relative w-full">
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
        </Routes>
        <footer className="relative bottom-0 text-center w-full bg-gray-300 py-2">
          &#169; Shefa 2024
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
