"use client";
import { message, Rate } from "antd";
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Emily Kim",
    role: "Founder",
    program: "Pure Bodybuilding Program",
    message: "This program has changed my life!",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Steward",
    role: "Creative Director",
    program: "The essentials program",
    message: "It changed the way I look and feel about myself.",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Lead Developer",
    program: "Pure Bodybuilding program",
    message: "I became stronger and more confident after this program.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60",
    rating: 3,
  },
  {
    id: 4,
    name: "Julia Gimmel",
    role: "UX Designer",
    program: "the hypertrophy program",
    message: "It helped me to get rid of my shoulder pain for ever!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Marketing Manager",
    program: "the essentials program",
    message: "Now I look young and vibrant than before!",
    img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60",
    rating: 4,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Manager",
    program: "the essentials program",
    message: "I never knew I could achieve this level of fitness!",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop",
    rating: 3.5,
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prev) => {
      const next = (newIndex + teamMembers.length) % teamMembers.length;
      return next;
    });

    setTimeout(() => setIsAnimating(false), 800);
  };

  // auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // keyboard arrows
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    const onTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) updateCarousel(currentIndex + 1);
        else updateCarousel(currentIndex - 1);
      }
    };

    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [currentIndex]);

  return (
    <div className="w-full  bg-gray-100 border-y border-slate-700">
      <div className="flex flex-col max-w-4xl min-h-[80vh] mx-auto items-center justify-center relative overflow-hidden">
        {/* Title */}
        <div className=" flex flex-col -gap-4">
          <h1 className=" ml-1 text-slate-600 text-2xl font-russo uppercase">
            What
          </h1>
          <h1 className="text-[4rem] md:text-[6rem] text-slate-900 font-russo -mt-10 font-black uppercase tracking-tight pointer-events-none">
            PEOPLE
          </h1>
          <h1 className="font-bold ml-2 text-shadow-sm text-shadow-amber-50 font-meine text-4xl text-amber-500 -mt-16 text-right">
            has to say
          </h1>
        </div>
        {/* Carousel */}
        <div className="relative w-full  h-[300px] -mt-5 perspective">
          <button
            className="absolute left-5 top-1/2 cursor-pointer -translate-y-1/2 transition-colors bg-amber-500 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl z-20 xtransition-transform duration-300"
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            <ChevronLeft className="w-5 h-5 mx-auto my-auto" />
          </button>

          <div className="w-full h-full scale-[60%] flex items-center justify-center relative preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            {teamMembers.map((member, i) => {
              const offset =
                (i - currentIndex + teamMembers.length) % teamMembers.length;
              let classes =
                "absolute w-72 h-[380px] bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer";
              if (offset === 0) {
                classes += " z-10 scale-110";
              } else if (offset === 1) {
                classes +=
                  " z-5 translate-x-52 scale-90 -z-10 opacity-90 grayscale";
              } else if (offset === 2) {
                classes +=
                  " translate-x-[400px] scale-80 -z-20 opacity-70 grayscale";
              } else if (offset === teamMembers.length - 1) {
                classes +=
                  " z-5 -translate-x-52 scale-90 -z-10 opacity-90 grayscale";
              } else if (offset === teamMembers.length - 2) {
                classes +=
                  " -translate-x-[400px] scale-80 -z-20 opacity-70 grayscale";
              } else {
                classes += " opacity-0 pointer-events-none";
              }

              return (
                <div
                  key={i}
                  className={`${classes} transform hover:[transform:perspective(900px)_rotateZ(2deg)]`}
                  onClick={() => updateCarousel(i)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
              );
            })}
          </div>

          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer bg-amber-500 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl z-20 transition-color duration-300"
            onClick={() => updateCarousel(currentIndex + 1)}
          >
            <ChevronRight className="w-5 h-5 mx-auto my-auto" />
          </button>
        </div>

        {/* Member Info */}
        <div className="flex flex-row w-full px-24">
          <div className="flex flex-col w-56 items-center justify-center gap-0.5 border-r-[1.8px] border-slate-800 pr-4">
            <Rate
              disabled
              value={Number(teamMembers[currentIndex].rating)}
              allowHalf
              className="scale-75 text-nowrap"
            />
            <h1 className="uppercase text-sm font-thin font-russo mt-1 text-slate-600">
              {teamMembers[currentIndex].name}
            </h1>
            <h1 className="text-xs text-slate-500 flex flex-row font-mont font-bold items-center gap-1">
              {teamMembers[currentIndex].role} <ShieldCheck className="w-3" />
            </h1>
            <h1 className="text-xs font-mont text-nowrap font-bold text-slate-500 uppercase">
              {teamMembers[currentIndex].program}
            </h1>
          </div>
          <h1 className="my-auto px-6 font-black text-black text-center font-mont">{`"${teamMembers[currentIndex].message}"`}</h1>
        </div>
        {/* <div className="text-center mt-10 transition-opacity duration-500">
        <h2 className="text-[rgb(8,42,123)] text-3xl md:text-4xl font-bold relative inline-block">
          {teamMembers[currentIndex].name}
          <span className="absolute top-full left-[-80px] w-20 h-0.5 bg-[rgb(8,42,123)]"></span>
          <span className="absolute top-full right-[-80px] w-20 h-0.5 bg-[rgb(8,42,123)]"></span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl uppercase tracking-widest mt-1">
          {teamMembers[currentIndex].role}
        </p>
      </div> */}

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {teamMembers.map((_, i) => (
            <div
              key={i}
              className={` h-2 rounded-full cursor-pointer transition-all duration-800 ${
                i === currentIndex
                  ? "bg-slate-900 scale-125 w-8"
                  : "bg-slate-300 w-2"
              }`}
              onClick={() => updateCarousel(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
