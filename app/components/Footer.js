import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="py-4 w-full bg-gray-100">
      <div className="container max-w-4xl mx-auto text-center flex flex-col gap-2 font-mont">
        <div className="flex flex-row my-4 justify-between items-start w-full">
          <div className="flex flex-row w-full justify-evenly">
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-russo  uppercase text-gray-800 mb-4">
                Programs
              </h1>
              <h1 className="font-mont text-[0.7rem] cursor-pointer font-semibold text-gray-600">
                Training Programs
              </h1>
              <h1 className="font-mont text-[0.7rem] cursor-pointer font-semibold text-gray-600">
                Nutritional Plans
              </h1>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="font-russo  uppercase text-gray-800 mb-4">
                Sponsors
              </h1>
              {[
                "Muscle Blaze",
                "Doctors Choice",
                "Fast and Up",
                "Decathelon",
                "Green Podi Company",
              ].map((sponsor, i) => (
                <h1
                  key={`sponsor.${i}`}
                  className="font-mont text-[0.7rem] cursor-pointer font-semibold text-gray-600"
                >
                  {sponsor}
                </h1>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-russo whitespace-nowrap mb-4 text-sm uppercase text-gray-800">
              Get my zero fluff, 1 paragraph weekly newsletter. For FREE!
            </h1>
            <div className="flex flex-row justify-between border border-gray-300 rounded-full overflow-hidden mt-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 outline-none text-[0.7rem] w-full"
              />
              <button className="bg-amber-500 cursor-pointer hover:bg-white hover:text-black transition-all hover:border-l border-slate-200 font-bold font-mont text-white px-4 py-2 text-[0.7rem]">
                Subscribe
              </button>
            </div>
            <div className="flex flex-row justify-end gap-4 text-gray-600 mt-4">
              <InstagramIcon className="w-4 h-4 cursor-pointer hover:text-amber-500 transition-all duration-300" />
              <YoutubeIcon className="w-4 h-4 cursor-pointer hover:text-amber-500 transition-all duration-300" />
              <LinkedinIcon className="w-4 h-4 cursor-pointer hover:text-amber-500 transition-all duration-300" />
            </div>
          </div>
        </div>
        <p className="text-[0.7rem] font-mont mt-8 font-bold text-gray-800">
          © 2025 JP-lifts. All rights reserved.
        </p>
        <h2 className="text-[0.6rem] font-light font-mont cursor-pointer uppercase text-gray-800">
          Privacy Policy | Terms of Service
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
