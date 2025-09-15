import Image from "next/image";
import Hero from "./components/home/Hero";
import TeamCarousel from "./components/home/Team";
import Popular from "./components/home/Popular";
import Programs from "./components/home/Programs";
import Transformations from "./components/home/Transformations";

export default function Home() {
  return (
    <main>
      <Hero />
      <TeamCarousel />
      <Popular />
      <Programs />
      <Transformations />
    </main>
  );
}
