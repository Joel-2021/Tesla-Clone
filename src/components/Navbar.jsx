import React, { useContext, useState } from "react";
import logo from "../../assets/tesla.svg";
import { TfiClose } from "react-icons/tfi";
import { context } from "../context";
const Navbar = () => {
  const {page,setPage}=useContext(context)
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-between px-10 p-4 items-center text-sm:font-bold fixed w-full ">
      <div className="flex">
        <a href="https://tesla.com">
        <img className="h-3" src={logo} />
        </a>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5" onClick={()=>setPage('model3')}>Model 3</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5" onClick={()=>setPage('modelS')}>Model S</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5" onClick={()=>setPage('modelX')}>Model X</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5" onClick={()=>setPage('modelY')}>Model Y</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5" onClick={()=>setPage('solarRoofs')}>
            Solar Roof
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5" onClick={()=>setPage('solarPanel')}>
            Solar Panels
          </li>
        </ul>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shops</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Accounts</li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={handleOpen}
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden md:inline">
        <button
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
          onClick={handleOpen}
        >
          Menu
        </button>
      </div>
      <div
        className="bg-white absolute top-0 right-0 w-64 h-full z-10"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex justify-end pr-4 pt-4">
          <TfiClose
            className="rounded p-1 hover:bg-black/5"
            size={28}
            onClick={handleClose}
          />
        </div>
        <ul className="pt-8 px-6 bg-white h-screen">
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer" onClick={()=>setPage('model3')}>Model 3</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer" onClick={()=>setPage('modelS')}>Model S</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer" onClick={()=>setPage('modelX')}>Model X</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer" onClick={()=>setPage('modelY')}>Model Y</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer" onClick={()=>setPage('solarRoofs')}>Solar Roofs</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer" onClick={()=>setPage('solarPanel')}>Solar Panel</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer">Tesla Wistle</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer">Flame Thrower</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer">Boring Company</li>
          <li className=" py-3 pl-3 hover:bg-black/5 hover:cursor-pointer">Space-X</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
