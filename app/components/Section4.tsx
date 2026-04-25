import Image from "next/image";

const testimonials = [1, 2, 3];

const Section4 = () => {
  return (
    <section>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((item) => (
          <div
            key={item}
            className="bg-background p-6 sm:p-8 rounded-lg shadow-sm"
          >
            <p className="text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              corrupti fugiat animi asperiores laboriosam magni delectus? Aut
              sapiente rerum laudantium placeat, animi recusandae. Esse
              explicabo aliquam nobis inventore animi quae.
            </p>

            <div className="py-4 flex items-center gap-3">
              <Image
                src="/hero.png"
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
            Connect Now
          </button>
        </div>

        <h2 className="mt-10 text-background text-[clamp(50px,14vw,200px)] font-semibold text-center leading-none">
          Let&apos;s Talk
        </h2>
      </div>
    </section>
  );
};

export default Section4;
