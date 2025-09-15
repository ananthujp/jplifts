import React from "react";

function Programs() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl min-h-[80vh] py-16 flex flex-col gap-2 mx-auto ">
        <h1 className="text-4xl font-light mb-4 text-center text-slate-900 font-russo">
          Programs
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="relative group w-full cursor-pointer overflow-hidden h-[28rem]"
            >
              <img
                src="https://jeffnippard.com/cdn/shop/files/home-training-programs-bg.jpg?v=1713441394&width=1000"
                alt={`Program ${item}`}
                className="w-full h-full object-cover group-hover:grayscale group-hover:scale-110 transition-all duration-500 "
              />
              <div className="flex flex-col gap-0 transition-all duration-500 absolute -bottom-4 group-hover:bottom-4 left-4 text-white">
                <h1 className="uppercase font-russo text-shadow-lg text-2xl">
                  Training Programs
                </h1>
                <h1 className="text-sm max-w-xs text-shadow-lg font-mont font-semibold">
                  A comprehensive guide to building muscle and strength.
                </h1>
                <div className="bg-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer text-slate-50 hover:text-black hover:bg-white w-36 text-center py-2 my-4 rounded-md font-mont font-black text-xs">
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
