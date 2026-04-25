import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen h-screen  flex flex-col ">
      <div className="">
        <Header />
      </div>

      <div className="flex-1 md:px-8">
        <Hero />
      </div>
      <div className="">
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
