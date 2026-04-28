import Image from "next/image";
import { SECTION2_QUERY } from "@/lib/sanity.queries";
import client from "@/lib/sanity";

type Logo = {
  name: string;
  url: string;
};

type ExperienceProps = {
  role: string;
  workPeriod: string;
  logos: Logo[];
  roleDescription: string;
};

const Section2 = async () => {
  const section2 = await client.fetch(SECTION2_QUERY);
  const data: ExperienceProps[] = section2[0].experienceList;

  return (
    <div className=" mx-4 md:max-w-7xl md:mx-auto ">
      <div className="mt-28">
        <div className="text-secondary text-5xl  font-black">Work did in</div>
 <h3 className="text-7xl  font-bold text-secondary ">
        
                {data[0].workPeriod}
              </h3>
      </div>
     
      <div className="grid md:grid-cols-12 grid-cols-1 my-10 gap-8">
        
      {data.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className="md:col-span-6 bg-black text-white p-8 rounded-lg"
            >
            

              <h3 className="text-[clamp(42px,6vw,72px)] font-semibold mt-3">
                {item.role}
              </h3>

              <p className="text-background text-sm my-4">
                {item.roleDescription}
              </p>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="md:col-span-3 bg-background p-8 rounded-lg"
          >
            {/* render logo */}
            {item.logos?.[0] && (
              <Image
                src={item.logos[0].url}
                alt={item.logos[0].name}
                width={40}
                height={40}
                className="object-contain"
              />
            )}

            <button className="border border-background my-3 px-2 rounded-lg">
              ROLE - {item.role}
            </button>

            <p className="text-secondary">
              {item.roleDescription}
            </p>
          </div>
        );
      })}
      </div>
        
    </div>
  );
};

export default Section2;
