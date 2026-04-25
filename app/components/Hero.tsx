import { Mail } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <div className="  max-w-7xl mx-auto p-4 md:p-0">
      <div className="flex md:flex-row flex-col justify-center items-center ">
        {/* Left */}
        <div className="md:w-1/2  md:pr-10 ">
          <h1 className="text-7xl font-bold text-[clamp(48px,6vw,72px)]">
            I do - design <br />
            <span>develop & launch</span>
          </h1>
          <p className="py-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure unde
            porro neque consequatur, provident ea quas vero placeat, illo dolor
            illum dolore. Sunt quas necessitatibus voluptatibus, illum earum
            molestias nihil.
          </p>
          <div className="pb-6 flex items-center justify-between md:w-3/4 w-full">
            <button className="bg-black border text-white flex items-center px-2 rounded-lg border-white ">
              Connect
              <span className="bg-white text-black rounded-sm m-2 ">
                <SiGmail />
              </span>
            </button>
            <div>OR</div>
            <div className="flex gap-3  ">
              <FaInstagram
                size={30}
                color="#000"
                className="bg-background p-2 rounded-sm "
              />
              <FaFacebook size={30} className="bg-background p-2 rounded-sm " />
              <FaTelegram size={30} className="bg-background p-2 rounded-sm " />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 w-full h-[calc(100dvh-64px)] ">
          <Image
            src="/hero.png"
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <button className="p-2  my-6 rounded-sm font-bold ">
            Recent Review
          </button>
        </div>
        <div className="bg-background  px-2 py-1 text-secondary rounded-lg">
          See More
        </div>
      </div>
      <div className="bg-background p-8 rounded-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          corrupti fugiat animi asperiores laboriosam magni delectus? Aut
          sapiente rerum laudantium placeat, animi recusandae. Esse explicabo
          aliquam nobis inventore animi quae.
        </p>
        <div className="py-3 flex items-center gap-3">
          <Image
            src="/hero.png"
            alt=" profile photo"
            width={50}
            height={50}
            className="rounded-full w-10 h-10  "
          />
          <div>
            <h3 className="font-bold ">Author Name</h3>
            <span className="italic text-sm  text-secondary">
              Author Profession
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
