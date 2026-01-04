"use client";
import { content } from "@/tailwind.config";
import { Modal, Rate } from "antd";
import { Handbag, HeartIcon } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";
import m2020 from "../../images/2020.png";
import { AnimatePresence } from "motion/react";
const data = [
  {
    title: "2020 - The Beginning",
    desc: "In 2020, I was just a small and weak kid who decided to step into the gym for the first time. I didn’t have a plan or any knowledge — just a desire to change and become a better version of myself.",
  },
  {
    title: "2021 - Working Hard Without Direction",
    desc: "I trained relentlessly, but I didn’t understand what I was doing. I followed random workouts, copied diets, and made every beginner mistake possible. Even though progress was slow, I never stopped showing up. That consistency built my foundation.",
  },
  {
    title: "2022 - Finding My Passion",
    desc: "By 2022, fitness had become more than a hobby — it turned into my passion. I started learning about training, nutrition, and recovery. For the first time, I realized that results come from knowledge, not just effort.",
  },
  {
    title: "2023 - Applying Knowledge and Competing",
    desc: "In 2023, I began applying everything I learned to my own journey. My training became structured, my nutrition made sense, and my strength skyrocketed. That same year, I competed in my first powerlifting competition — and won. That victory changed everything.",
  },
  {
    title: "2024 - Inspiring Others",
    desc: "In 2024, I started creating fitness content to share my experience and help others avoid the mistakes I made. I competed in multiple powerlifting competitions and continued to grow both as an athlete and a creator. My mission became clear — to inspire people to chase strength and self-improvement.",
  },
  {
    title: "2025 - From Athlete to Coach",
    desc: "By 2025, I started coaching people and helping them transform their lives through the same principles that changed mine. Now, my goal is bigger than personal achievements. I’m building a community of people who want to be healthy, fit, and strong — both physically and mentally.",
  },
];
function Slider({ pos, setPos, n, scrl_st }) {
  return (
    <div className="flex flex-col relative mt-2 items-center">
      <div
        style={{ marginTop: scrl_st }}
        className=" w-6 h-6 absolute rounded-full border"
      />
      {[...Array(n)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            style={{ height: window.innerHeight * 0.4 }}
            className={`w-1 bg-amber-500  ${i == 0 && "hidden"}`}
          />

          <div
            onClick={() => setPos(i)}
            className={`rounded-full cursor-pointer relative transition-all bg-amber-500 ${
              i == pos ? " w-4 h-4 " : " w-2 h-2"
            }`}
          ></div>
        </div>
      ))}
      {/* <div className="rounded-full w-4 h-4 relative bg-amber-500 after:absolute after:w-6 after:inset-0 after:-translate-x-1 after:-translate-y-1 after:h-6 after:rounded-full after:border" />
      <div className="w-1 bg-amber-500 h-12 mt-1" />
      <div className="rounded-full w-3 h-3 relative bg-amber-500 " />
      <div className="w-1 bg-amber-500 h-12 mt-0" />
      <div className="rounded-full w-3 h-3 relative bg-amber-500 " />
      <div className="w-1 bg-amber-500 h-12 mt-0" />
      <div className="rounded-full w-3 h-3 relative bg-amber-500 " />
      <div className="w-1 bg-amber-500 h-12 mt-0" />
      <div className="rounded-full w-3 h-3 relative bg-amber-500 " />
      <div className="w-1 bg-amber-500 h-12 mt-0" />
      <div className="rounded-full w-3 h-3 relative bg-amber-500 " /> */}
    </div>
  );
}
function MyJourney() {
  const [pos, setPos] = React.useState(0);
  const [scrl_st, setScrlSt] = React.useState(0);
  const containerRef = React.useRef(null);
  const posRef = React.useRef(pos);

  React.useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      // amount scrolled inside this tall container (when top reaches viewport)
      const start = Math.max(0, -rect.top);
      const maxScroll = (data.length - 1) * window.innerHeight;
      const local = Math.min(start, maxScroll);
      setScrlSt(local);
      console.log(local / (window.innerHeight * 0.4));
      const newPos = Math.floor(local / window.innerHeight);
      if (newPos !== posRef.current) {
        setPos(newPos);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-graphite-900 border-b border-slate-800"
      style={{ height: `${data.length * 0.9 * 100}vh` }}
    >
      <div className="max-w-4xl relative xh-screen py-16 flex flex-col gap-2 mx-auto ">
        <div
          className={`flex flex-col gap-2 ${
            scrl_st > 0 && scrl_st < (data.length - 1) * window.innerHeight
              ? "fixed top-0 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl bg-graphite-900/50 backdrop-blur-md py-4"
              : ""
          }`}
        >
          <h1 className="text-xl uppercase text-center -mb-3 font-light text-slate-100 font-russo">
            (2020 - 2025)
          </h1>
          <h1 className="text-6xl uppercase text-center font-light text-slate-100 font-russo">
            My Journey
          </h1>
          <h1 className="text-3xl text-center font-bold -mt-8 ml-56 text-amber-500 font-meine">
            of transformation
          </h1>
        </div>
        {scrl_st > 0 && scrl_st < (data.length - 1) * window.innerHeight && (
          <div className="w-full max-w-4xl h-28 mx-auto" />
        )}
        <div className="flex flex-col h-full mt-24 relative items-center xjustify-center">
          <div
            style={{
              marginTop:
                scrl_st < window.innerHeight * 0.8 * (data.length - 0.75)
                  ? scrl_st + 0.2 * window.innerHeight
                  : (window.innerHeight + 8) * 0.8 * (data.length - 1) +
                    0.4 * window.innerHeight,
            }}
            className=" w-6 h-6 absolute rounded-full border border-white"
          />
          {data.map((_, i) => (
            <div
              key={`journey-item-${i}`}
              className={`flex ${"flex-row"}  my-auto gap-4  items-center justify-center`}
            >
              <div
                style={{
                  opacity:
                    1 -
                    0.5 *
                      Math.abs(
                        (scrl_st - i * 8) / (window.innerHeight * 0.4) -
                          (2 * i + 0.5) * 1
                      ),
                  filter: `blur(${
                    Math.abs(
                      (scrl_st - i * 8) / (window.innerHeight * 0.4) -
                        (2 * i + 0.5) * 1
                    ) * 3
                  }px)`,
                }}
                className="w-full h-96 relative flex items-center justify-center"
              >
                <motion.div
                  key={`img.${i}`}
                  animate={{ rotate: i % 2 === 0 ? 6 : -6 }}
                  className="flex w-96"
                >
                  <Image
                    src={m2020}
                    alt=""
                    className="w-full border-6 rounded-sm shadow-md mr-4 border-white"
                  />
                </motion.div>
              </div>

              {/* <Slider
              pos={pos}
              n={data.length}
              setPos={setPos}
              scrl_st={scrl_st}
            /> */}
              <div
                key={i}
                className="flex flex-col justify-center items-center"
              >
                <div
                  style={{ height: window.innerHeight * 0.4 }}
                  className={`w-1 bg-amber-500 `}
                />

                <div
                  //   onClick={() => setPos(i)}
                  className={`rounded-full cursor-pointer relative transition-all bg-amber-500 ${
                    Math.abs(
                      (scrl_st - i * 8) / (window.innerHeight * 0.4) -
                        (2 * i + 0.5) * 1
                    ) > 0.04
                      ? "w-2 h-2"
                      : "w-4 h-4"
                  }`}
                />
                <div
                  style={{ height: window.innerHeight * 0.4 }}
                  className={`w-1 bg-amber-500 ${
                    i == data.length - 1 && "opacity-0"
                  }`}
                />
              </div>
              <div
                style={{
                  opacity:
                    1 -
                    0.5 *
                      Math.abs(
                        (scrl_st - i * 8) / (window.innerHeight * 0.4) -
                          (2 * i + 0.5) * 1
                      ),
                  filter: `blur(${
                    Math.abs(
                      (scrl_st - i * 8) / (window.innerHeight * 0.4) -
                        (2 * i + 0.5) * 1
                    ) * 3
                  }px)`,
                }}
                className="flex flex-col w-full gap-2"
              >
                <motion.h1
                  //   key={`title-${pos}`}
                  //   style={{ marginTop: pos * 56 }}
                  //   initial={{ opacity: 0, y: -10 }}
                  //   animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
                  //   exit={{ opacity: 0, y: 50 }}
                  className="text-2xl font-russo font-light text-slate-100"
                >
                  {data[i].title}{" "}
                </motion.h1>
                <motion.p
                  //   key={`desc-${pos}`}
                  //   initial={{ opacity: 0, y: -10 }}
                  //   animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
                  //   exit={{ opacity: 0, y: 50 }}
                  className="font-mont"
                >
                  {data[i].desc}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
