"use client";
import { message, Rate } from "antd";
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Aboutme() {
  return (
    <div className="w-full  bg-gray-100 border-y border-slate-700">
      <div className="flex flex-col max-w-4xl min-h-[80vh] mx-auto items-center justify-center relative overflow-hidden">
        {/* Title */}
        <div className="flex flex-col gap-4 w-full items-center justify-between px-8 pt-8">
          <div className=" flex flex-col -gap-2 ">
            <h1 className=" ml-1 mb-3 text-slate-600 text-2xl text-center font-russo uppercase">
              About me
            </h1>
            <h1 className="text-[4rem] md:text-[4rem] text-slate-900 font-russo -mt-10 font-black uppercase tracking-tight pointer-events-none">
              Akshay J P
            </h1>
            <h1 className="font-bold ml-2 text-shadow-sm text-shadow-amber-50 font-meine text-4xl text-amber-500 -mt-12 text-right">
              the founder
            </h1>
          </div>
          <div className=" flex flex-col gap-2 text-sm mt-4 text-slate-700 font-mont w-[60%]">
            <h1 className="font-russo">&nbsp;</h1>
            <p className="text-justify">
              Hi, I&apos;m Akshay J P, the founder of{" "}
              <strong className="font-black">JP Lifts</strong>, a National Gold
              Medalist and Powerlifter, a science-based content creator, and a
              fitness trainer with over six years of training experience and
              more than one year of coaching experience.
            </p>
            <p className="text-justify ">
              Over time, I have helped people from all backgrounds, from
              complete beginners to advanced lifters, get stronger, leaner, and
              more confident through evidence-based training and balanced
              nutrition.
            </p>
            <p className="text-justify ">
              I started JP Lifts to simplify fitness coaching and make results
              achievable for everyone. My focus is to cut through misinformation
              and provide structured training, sustainable nutrition, and
              genuine accountability backed by science and experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
