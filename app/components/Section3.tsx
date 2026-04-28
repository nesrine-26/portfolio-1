import Image from "next/image";
import { SECTION3_QUERY } from "@/lib/sanity.queries";
import client from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Hero_QUERY } from "@/lib/sanity.queries";
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type ProjectsProps = {
  projectTitle: string;
  projectImage: string;
  projectDescription: string;

};




const Section3 = async () => {
  const section3 = await client.fetch(SECTION3_QUERY);
  const data: ProjectsProps[] = section3?.[0]?.projects;
 const hero = await client.fetch(Hero_QUERY);
  const data1 = hero[0];
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">

        {/* badge */}
        <button className="border bg-background border-secondary px-3 py-1 rounded-sm">
          dream projects
        </button>

        {/* heading */}
        <div className="mt-6 max-w-5xl">
          <h2 className="text-[clamp(36px,6vw,72px)] max-w-[93%] leading-tight font-medium">
            {section3[0].quote}
          </h2>
        </div>

        {/* cards grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-5xl my-10">
          {data?.map((project, index) => (
            <div
              key={index}
              className="h-full p-4 border rounded-lg bg-white shadow-sm"
            >
              <h3 className="text-2xl font-bold px-2 py-1 mb-2">
                {project.projectTitle}
              </h3>

              <Image
                src={urlFor(project.projectImage).url()}
                alt={project.projectTitle}
                width={500}
                height={500}
                className="w-full h-60 rounded-lg object-cover"
              />

              <p className="text-secondary text-sm sm:text-base mt-4 leading-relaxed">
                {project.projectDescription}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="border bg-background border-secondary px-3 py-1 rounded-sm">
         <a href={`emailto: ${data1.email}`}> Let&apos;s Talk</a>  
          </button>
        </div>
      </div>

      {/* side image */}
      <div className="hidden xl:block absolute top-0 right-0 h-full w-[32%]">
        <Image
          src={urlFor(section3[0].sectionBgImage).url()}
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
