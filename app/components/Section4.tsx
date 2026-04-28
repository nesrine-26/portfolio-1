import Image from "next/image";
import client from '@/lib/sanity';
import { SECTION4_QUERY } from "@/lib/sanity.queries";
import  ImageUrlBuilder  from "@sanity/image-url";
import { Hero_QUERY } from "@/lib/sanity.queries";
const builder = ImageUrlBuilder(client)
function urlFor(source:string){
  return builder.image(source)
}

type TestimonialsProps = {
  review: string;
  authorImage: string;
}
const Section4 = async() => {
const hero = await client.fetch(Hero_QUERY);
  const data = hero[0];
  const section4 = await  client.fetch(SECTION4_QUERY)
  const testimonials:TestimonialsProps[] = section4[0].testimonials

  return (
    <section>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials?.map((item, index) => (
          <div
            key={index}
            className="bg-background p-6 sm:p-8 rounded-lg shadow-sm"
          >
            <p className="text-sm sm:text-base leading-relaxed">
              {item.review}
            </p>

            <div className="py-4 flex items-center gap-3">
              <Image
                src={urlFor(item.authorImage).url()}
                alt="profile photo"
                width={50}
                height={50}
                className="rounded-full w-10 h-10 object-cover"
              />

              <div>
                <h3 className="font-bold">Author Name</h3>
                <span className="italic text-sm text-secondary">
                  Author Profession
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-dark px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-24 lg:py-32 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-background">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            So, you got any project in your mind?
          </h2>

          <button className="border px-5 py-2 rounded-sm bg-background text-secondary shadow-[6px_6px] hover:translate-x-1 hover:translate-y-1 transition">
          <a href= {`mailto:${data.email}`}></a>  Connect Now
          </button>
        </div>

        <h2 className="mt-10 text-background text-[clamp(50px,14vw,200px)] font-semibold text-center leading-none">
          <a href={`emailto: ${data.email}`}> Let&apos;s Talk</a>  
        </h2>
      </div>
    </section>
  );
};

export default Section4;
