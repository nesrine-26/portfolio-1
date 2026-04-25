"use client";
import { Menu, Rose, Search, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#About" },
    { name: "Services", link: "#Services" },
    { name: "Contact", link: "#Contact" },
  ];
  return (
    <header className="">
      <div className="flex justify-between max-w-7xl mx-auto items-center p-4 md:py-4 ">
        {/*logo*/}
        <div className="font-bold text-2xl" style={{ fontFamily: "outfit" }}>
          <a href="/">ida.</a>
        </div>
        {/*navItems _ Desktop*/}
        <div className="hidden lg:flex justify-center items-center gap-4 ">
          {navItems.map((nav) => (
            <nav key={nav.name}>
              <a href={nav.link}>{nav.name} </a>
            </nav>
          ))}
        </div>
        <div
          className="hover:bg-white/20 p-2 rounded-lg lg:hidden transition duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
      </div>

      {/*navItems _ Mobile*/}
      <div
        className={`flex flex-col lg:hidden   items-center transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen border-t " : "max-h-0 opacity-0"}`}
      >
        {navItems.map((nav) => (
          <nav key={nav.name} className="py-4 ">
            <a href={nav.link} onClick={() => setIsOpen(false)}>
              {nav.name}{" "}
            </a>
          </nav>
        ))}
      </div>
    </header>
  );
};

export default Header;
