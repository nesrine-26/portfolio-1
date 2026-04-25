import { Apple, AppleIcon } from "lucide-react";
import React from "react";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:px-0">
      <button className="bg-background border-secondary ">My work</button>
      <div className="flex md:flex-row flex-col justify-between items-center ">
        <h2 className="text-[clamp(48px,6vw,72px)] leading-16 md:max-w-3/4 order-2 ">
          <span>Not only</span> business growth, <span>but my work </span>{" "}
          change the lives
        </h2>
        <div>
          <div className=" text-[clamp(21px,3vw,36px)] order-1 md:order-0">
            <p className="text-background foont-black">Work did in -</p>
            <p className="text-[clamp(42px,6vw,72px)] font-black ">24-26</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-12 gird-cols-1 my-10 gap-8">
        <div className="md:col-span-6 bg-black  text-white p-8  rounded-lg ">
          <button className="border-background px-1 rounded-lg ">
            ROLE - Sr UV/UX Dev
          </button>
          <h3 className="text-[clamp(42px,6vw,72px)] font-semibold">Spotify</h3>
          <p className="text-background text-sm  my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            laboriosam molestiae quisquam! Fugit quae voluptatum ipsam, beatae
            eaque expedita ratione unde maxime quisquam libero consequuntur
            facilis, voluptates iste, rerum deleniti?
          </p>
        </div>
        <div className="md:col-span-3 bg-background p-8 rounded-lg ">
          <FaApple size={30} />
          <button className="border-background border my-3 px-2 rounded-lg  ">
            ROLE - Sr UI/UX Dev
          </button>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            facilis voluptates similique necessitatibus? Quasi est minus sit
            inventore, veniam tempora, hic expedita voluptatibus fugit ut sequi
            recusandae aut illo ipsa!
          </p>
        </div>
        <div className="md:col-span-3 bg-background p-8 rounded-lg ">
          <FaWindows size={30} />
          <button className="border-background border mt-3 px-2 rounded-lg  ">
            ROLE - Sr UI/UX Dev
          </button>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            facilis voluptates similique necessitatibus? Quasi est minus sit
            inventore, veniam tempora, hic expedita voluptatibus fugit ut sequi
            recusandae aut illo ipsa!
          </p>
        </div>
      </div>
      <div className="w-full px-4 flex justify-center mx-auto">
        <button className=" px-4 py-1  bg-background text-secondary rounded-lg">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Section2;
