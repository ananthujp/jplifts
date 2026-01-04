"use client";
import { message, Rate } from "antd";
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  return (
    <div className="w-full  bg-gray-100 border-y border-slate-700">
      <div className="flex flex-col max-w-4xl min-h-[80vh] mx-auto items-center justify-center relative overflow-hidden">
        {/* Title */}
        <div className="flex flex-row gap-4 w-full items-center justify-between px-8 pt-8">
          <div className=" flex flex-col -gap-4 ml-auto mr-4">
            <h1 className=" ml-1 text-slate-600 text-2xl font-russo uppercase">
              About
            </h1>
            <h1 className="text-[4rem] md:text-[6rem] text-slate-900 font-russo -mt-10 font-black uppercase tracking-tight pointer-events-none">
              JP
            </h1>
            <h1 className="font-bold ml-2 text-shadow-sm text-shadow-amber-50 font-meine text-4xl text-amber-500 -mt-16 text-right">
              lifts
            </h1>
          </div>
          <div className=" flex flex-col gap-2 text-sm mt-4 text-slate-700 font-mont w-[60%]">
            <h1 className="font-russo">&nbsp;</h1>
            <p className="text-justify">
              At <strong className="font-black">JP Lifts</strong>, every program
              is designed to help you achieve your fitness goals through&nbsp;
              <strong className="font-black">
                science-based training and practical nutrition
              </strong>
              &nbsp; that fits your lifestyle.
            </p>
            <p className="text-justify ">
              Whether your goal is to{" "}
              <strong className="font-black">
                lose fat, build muscle, or gain strength,
              </strong>
              your plan is fully personalized to your body, experience level,
              and schedule.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8 pb-8 text-sm text-slate-700 font-mont">
          <h1 className="font-russo text-md -mb-2">
            Each JP Lifts program includes:
          </h1>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>
              <strong className="font-black">
                🥗 Customized Nutrition Plan
              </strong>
              &nbsp;- tailored to your calorie needs and food preferences.
            </li>
            <li>
              <strong className="font-black">
                🏋️ Structured Training Program
              </strong>
              &nbsp;- focused on progressive overload, strength, and long-term
              results.
            </li>
            <li>
              <strong className="font-black">
                📲App-Based 1-on-1 Coaching
              </strong>
              &nbsp;- your workouts, progress, and weekly feedback are managed
              inside a professional fitness app for smooth communication and
              accountability.
            </li>
          </ol>
          JP Lifts programs are designed for lifters of all experience levels,
          from beginners to advanced athletes. If you are already an experienced
          lifter or someone confident in your training, JP Lifts also offers
          program-only options so you can make the most of your experience ,
          follow a structured plan, and invest less while still progressing
          efficiently. Every plan is built around consistency, sustainability,
          and measurable progress, because real transformation comes from the
          right structure and consistent execution, not quick fixes or random
          training.
          <span className="bg-amber-400 cursor-pointer hover:bg-slate-700 active:bg-slate-800 hover:text-white mt-2 text-center not-italic text-white px-2 py-1 w-32 rounded-md">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}
