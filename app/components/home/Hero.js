"use client";
import Image from "next/image";
import React from "react";
import heroBg from "../../images/bg.jpg";
import m1 from "../../images/m1.png";
import m2 from "../../images/m2.png";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  ChartNoAxesCombined,
  ClipboardList,
  ListRestart,
  Users,
} from "lucide-react";
function Hero() {
  const [hovered, setHovered] = useState(false);
  const [sel, setSel] = useState(null);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full overflow-hidden group"
    >
      {/* video-part */}
      <div className="font-sans relative bg-[#0d0c11] h-[70vh] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
        <Image
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-contain absolute top-0 left-0 "
        />
        <h1 className="absolute z-5 group-hover:scale-90 group-hover:-ml-180 transition-all duration-1000 uppercase text-[4rem] font-black italic -ml-90 text-amber-400 font-russo">
          Strength
        </h1>
        <h1 className="absolute z-5 group-hover:scale-90 group-hover:-ml-160 transition-all duration-1000 uppercase text-[4rem] font-black italic mt-15 -ml-110 text-white font-russo">
          in motion
        </h1>
        <h1
          className="absolute group-hover:-ml-95 group-hover:mb-10 transition-all duration-1000  -bottom-25 origin-left translate-x-80 -rotate-55 text-[5rem] z-5 pointer-events-none font-russo [--outline-color:#ffffff]
         [--text-outline:0_1px_0_var(--outline-color),1px_0_0_var(--outline-color),0_-1px_0_var(--outline-color),-1px_0_0_var(--outline-color),-1px_-1px_0_var(--outline-color),1px_-1px_0_var(--outline-color),-1px_1px_0_var(--outline-color),1px_1px_0_var(--outline-color)]
         text-shadow-(--text-outline) text-nowrap  text-slate-900 uppercase"
        >
          Lift.Grow.Transform
        </h1>
        <h1
          className="absolute group-hover:-ml-125 group-hover:-mb-10 transition-all duration-1000  -bottom-25 origin-left translate-x-100 -rotate-55 text-[5rem] z-5 pointer-events-none font-russo [--outline-color:#ffffff]
         [--text-outline:0_1px_0_var(--outline-color),1px_0_0_var(--outline-color),0_-1px_0_var(--outline-color),-1px_0_0_var(--outline-color),-1px_-1px_0_var(--outline-color),1px_-1px_0_var(--outline-color),-1px_1px_0_var(--outline-color),1px_1px_0_var(--outline-color)]
         text-shadow-(--text-outline) text-nowrap  text-slate-900 uppercase"
        >
          Transform.Lift.Grow
        </h1>
        <Image
          src={m2}
          alt="Hero Background"
          className="w-full h-full pointer-events-none group-hover:-ml-55 transition-all duration-1000 object-contain absolute bottom-0 left-0 z-5 scale-100 origin-bottom"
        />
        <Image
          src={m1}
          alt="Hero Background"
          className="w-full h-full pointer-events-none group-hover:-ml-55 group-hover:scale-95 transition-all duration-1000 object-contain absolute bottom-0 left-0 z-10 scale-100 origin-bottom"
        />
        <div className="max-w-4xl mx-auto flex relative h-full w-full">
          <AnimatePresence>
            {hovered && (
              <div className="absolute text-right -bottom-12  font-russo right-0">
                <motion.h1
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0, duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    transition: { duration: 0.5, delay: 4 * 0.2 },
                  }}
                  className="text-xl uppercase italic xtext-white text-amber-400"
                >
                  How we help you
                </motion.h1>
                {[
                  {
                    title: "Tailored Plans",
                    description:
                      "We build goal-first training and nutrition plans designed around your life — experience level, schedule, equipment, and injury history. Every plan is progressive and periodized with clear milestones so you always know the next step, and nothing is cookie-cutter.",
                    icon: (
                      <ClipboardList className="w-4 h-4 inline-block mr-2" />
                    ),
                  },
                  {
                    title: "Personalized Coaching",
                    description:
                      "One-on-one coaching that goes beyond spreadsheets: video form reviews, technique cues, mindset coaching and real-time adjustments. JP and the team coach you through the hard reps, correct form, and tweak programming so you lift safer and faster.",
                    icon: <Users className="w-4 h-4 inline-block mr-2" />,
                  },
                  {
                    title: "Building Sustainable Habits",
                    description:
                      "We teach practical habit strategies — small, repeatable actions that stack into lifelong change (meal prep, sleep, mobility, micro-wins). The focus is consistency over extremes: habits you can keep for years, not quick fixes you burn out from.",

                    icon: <ListRestart className="w-4 h-4 inline-block mr-2" />,
                  },
                  {
                    title: "Monitoring and Accountability",
                    description:
                      "Progress is tracked with measurable metrics — training logs, performance PRs, photos, and weekly check-ins — so improvements are visible and actionable. Regular accountability, honest feedback, and timely program tweaks keep momentum high and excuses low.",

                    icon: (
                      <ChartNoAxesCombined className="w-4 h-4 inline-block mr-2" />
                    ),
                  },
                ].map((item, i) => (
                  <motion.div
                    layoutId={`item-${i}`}
                    transition={{ duration: 0.1 }}
                    onHoverStart={() => setSel(i)}
                    onHoverEnd={() => setSel(null)}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,

                      transition: { delay: i * 0.2 + 0.1, duration: 0.5 },
                    }}
                    exit={{
                      opacity: 0,
                      y: 50,
                      transition: { duration: 0.2, delay: (4 - i) * 0.2 - 0.1 },
                    }}
                    className="my-3 py-2 text-white group/item cursor-default overflow-hidden w-86 flex flex-col items-end bg-slate-50/20 hover:bg-white transition-all group/it px-4"
                    key={i}
                  >
                    <h1 className="flex flex-row items-center gap-2 transition-all group-hover/item:text-slate-700">
                      {item.title} {item.icon}
                    </h1>
                    {sel === i && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.2 } }}
                        exit={{ opacity: 0 }}
                        className="text-xs italic flex-col items-center gap-2 text-slate-600 group-hover/item:flex xgroup-hover/item:text-slate-700 hidden text-justify font-mont font-light"
                      >
                        {item.description}
                        <span className="bg-amber-400 cursor-pointer hover:bg-slate-700 active:bg-slate-800 hover:text-white mt-2 text-center not-italic text-white px-2 py-1 w-32 rounded-md">
                          Learn More
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Hero;
