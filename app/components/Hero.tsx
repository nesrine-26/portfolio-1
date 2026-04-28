import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";
import { Hero_QUERY } from "@/lib/sanity.queries";
import client from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  telegram: FaTelegram,
  twitter: FaTwitter,
  tweeter: FaTwitter,
  x: FaTwitter,
};

const Hero = async () => {
  const hero = await client.fetch(Hero_QUERY);
  const data = hero[0];
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-0">
      <div className="flex md:flex-row flex-col justify-center items-center">
        {/* Left */}
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-7xl font-bold text-[clamp(48px,6vw,72px)]">
            {data.title}
          </h1>

          <p className="py-6">{data.description}</p>

          <div className="flex gap-3 justify-between items-center mb-5">
            <button className="bg-black border text-white flex items-center px-2 rounded-lg border-white ">
              Connect
              <a href={`mailto:${data.email}`} className="cursor-pointer bg-white p-1 text-black rounded-sm m-2 ">
                <SiGmail />
              </a>
            </button>
            <div>OR</div>
            <div className="flex gap-3 flex-wrap ">
              {data?.socials?.map(
                (social: { name: string; url: string }, index: number) => {
                  const key = social.name.toLowerCase();
                  const Icon =
                    socialIcons[key as keyof typeof socialIcons] || FaGlobe;

                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border bg-background border-secondary p-2 rounded-sm"
                    >
                      <Icon size={24} />
                    </a>
                  );
                },
              )}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 w-full h-[calc(100dvh-64px)] ">
          <Image
            src={urlFor(data.heroImage).url()}
            alt="Hero image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div>
          <button className="p-2   rounded-sm font-bold ">
            Recent Review
          </button>
        </div>
        <Link href={data.reviewLink} className="bg-background  px-2 py-1 text-secondary rounded-lg">
          See More
        </Link>
      </div>
      <div className="bg-background p-8 rounded-lg">
        <p>
          {data.review}
        </p>
        <div className="py-3 flex items-center gap-3">
          <Image
            src={urlFor(data?.authorImage).url()}
            alt=" profile photo"
            width={50}
            height={50}
            className="rounded-full w-10 h-10  "
          />
          <div>
            <h3 className="font-bold ">{data.reviewAuthor}</h3>
            <span className="italic text-sm  text-secondary">
              {data.authorProfession}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
