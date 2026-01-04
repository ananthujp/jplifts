import Image from "next/image";
import Hero from "./components/home/Hero";
import TeamCarousel from "./components/home/Team";
import Popular from "./components/home/Popular";
import Programs from "./components/home/Programs";
import Transformations from "./components/home/Transformations";
import About from "./components/home/About";
import Aboutme from "./components/home/AboutMe";
import MyJourney from "./components/home/MyJourney";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Hero />
        <About />
        <Aboutme />
        <MyJourney />
        <Transformations />
        <TeamCarousel />
        <Popular />
        <Programs />
      </div>
    </main>
  );
}
