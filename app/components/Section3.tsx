import Image from "next/image";
import React from "react";
import { FaApple, FaWindows } from "react-icons/fa";

const Section3 = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        {/* badge */}
        <button className="rounded-lg border border-secondary px-3 py-1 text-sm">
          dream projects
        </button>

        {/* heading */}
        <div className="mt-6 max-w-5xl">
          <h2 className="text-[clamp(36px,6vw,72px)] leading-tight font-medium">
            <span>Not only</span> business growth,{" "}
            <span className="text-secondary underline decoration-dashed">
              do not stop
            </span>{" "}
            change the lives
          </h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-5xl my-10">
          {/* card 1 */}
          <div className="p-6 sm:p-8 border rounded-lg bg-white shadow-sm">
            <button className="border border-background px-2 py-1 rounded-lg text-sm">
              ROLE - Sr UI/UX Dev
            </button>

            <h3 className="mt-4 text-[clamp(32px,5vw,64px)] font-semibold">
              Spotify
            </h3>

            <p className="text-secondary text-sm sm:text-base mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              laboriosam molestiae quisquam! Fugit quae voluptatum ipsam.
            </p>
          </div>

          {/* card 2 */}
          <div className="border bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <FaApple size={30} />

            <button className="border border-background my-4 px-3 py-1 rounded-lg text-sm">
              ROLE - Sr UI/UX Dev
            </button>

            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              facilis voluptates similique necessitatibus.
            </p>
          </div>

          {/* card 3 */}
          <div className="border bg-white p-6 sm:p-8 rounded-lg shadow-sm">
            <FaWindows size={30} />

            <button className="border border-background my-4 px-3 py-1 rounded-lg text-sm">
              ROLE - Sr UI/UX Dev
            </button>

            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              facilis voluptates similique necessitatibus.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-background text-secondary rounded-lg shadow-sm hover:scale-105 transition">
            Let&apos;s Talk
          </button>
        </div>
      </div>

      {/* side image */}
      <div className="hidden xl:block absolute top-0 right-0 h-full w-[32%]">
        <Image
          src="/woman.png"
          alt="woman"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Section3;
