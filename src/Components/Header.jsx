import React from "react";
import { FaSearch } from "react-icons/fa";

const header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
          <span className="text-slate-500">CodingCleverly</span>
          <span className="text-slate-700">Estate</span>
        </h1>
      

      <form className=" text-slate-100  p-3 rounded-lg flex items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-black focus:outline "
        ></input>
        <FaSearch className="text-slate-600" />
      </form>

      <ul className="flex gap-4">
        <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
        <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
        <li className="hidden sm:inline text-slate-700 hover:underline">Sign In</li>
         
      </ul>
      </div>
    </header>
  );
};

export default header;
