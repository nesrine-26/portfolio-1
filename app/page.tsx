import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 md:px-8">
        <Hero />
        <Section2 />
        <Section3 />
      </main>
      <Section4 />
      <Footer />
    </div>
  );
}
