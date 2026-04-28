"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "My work", link: "#myWork" },
    { name: "projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <header className="relative bg-background opacity-70 backdrop-blur-3xl md:px-10 px-0">
      <div className="sticky top-0  flex justify-between max-w-7xl mx-auto items-center p-4 md:p-0 md:py-4 ">
        {/*logo*/}
        <div className="font-bold text-2xl" style={{ fontFamily: "outfit" }}>
          <a href="/">ida.</a>
        </div>
        {/*navItems _ Desktop*/}
        <div className="hidden lg:flex justify-center items-center gap-4 ">
          {navItems.map((nav) => (
            <nav
              key={nav.name}
              className="border bg-background border-secondary px-3 py-1  rounded-sm  hover:bg-secondary hover:text-background"
            >
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
