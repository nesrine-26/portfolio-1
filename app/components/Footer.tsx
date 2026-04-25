import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* top footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-center md:text-left">
          {/* logo */}
          <div
            className="font-bold text-2xl sm:text-3xl"
            style={{ fontFamily: "outfit" }}
          >
            <a href="/">ida.</a>
          </div>

          {/* quote */}
          <div>
            <p className="text-sm sm:text-base text-secondary italic">
              "Creativity Knows no limit"
            </p>
          </div>

          {/* socials */}
          <div className="flex gap-3">
            <FaInstagram
              size={38}
              className="bg-background p-2 rounded-sm hover:scale-110 transition cursor-pointer"
            />

            <FaFacebook
              size={38}
              className="bg-background p-2 rounded-sm hover:scale-110 transition cursor-pointer"
            />

            <FaTelegram
              size={38}
              className="bg-background p-2 rounded-sm hover:scale-110 transition cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-dark px-4 py-3">
        <p className="text-center text-background text-sm sm:text-base">
          All rights reserved to idea © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
