"use client";
import { content } from "@/tailwind.config";
import { Modal, Rate } from "antd";
import { Handbag, HeartIcon } from "lucide-react";
import React from "react";

function Popular() {
  const [isModalOpen, setIsModalOpen] = React.useState({
    vis: false,
    content: null,
  });
  const handleOk = () => {
    setIsModalOpen({ vis: false, content: null });
  };
  const handleCancel = () => {
    setIsModalOpen({ vis: false, content: null });
  };
  return (
    <div className="w-full bg-graphite-900 border-b border-slate-800">
      <Modal
        title=""
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen.vis}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="gap-4 xrounded-lg h-80 flex flex-row items-stretch">
          <div className="flex-1 overflow-hidden xrounded-md h-full">
            <img
              src="https://jeffnippard.com/cdn/shop/files/ThePureBodybuildingProgram_4308fbb5-6e5a-4438-93d7-ee5690304e9d.jpg?v=1701208456&width=600"
              alt=""
              className="w-full h-full object-cover origin-center xrounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden items-start justify-between rounded-md h-full">
            <div className="flex flex-col gap-1">
              <h1 className="uppercase text-sm pb-1 w-full text-left font-thin font-russo mt-1 text-slate-600">
                The pure body building program
              </h1>
              <Rate
                disabled
                value={5}
                allowHalf
                className="scale-75 origin-left text-nowrap"
              />

              <h1 className="text-xs py-1 w-full text-left uppercase text-slate-500 font-mont font-bold gap-1">
                Intermediate level
              </h1>
              <h1 className="text-xs py-1 w-full mt-1 text-left text-slate-500 font-mont font-bold gap-1">
                Program Details
              </h1>
              <ol className="list-disc pl-5 text-slate-500 text-xs italic">
                <li>
                  <b>Duration:</b> 12 weeks
                </li>
                <li>
                  <b>Workouts:</b> 5 days a week
                </li>
                <li>
                  <b>Nutrition:</b> Customized meal plan
                </li>
              </ol>
            </div>

            <h1 className="text-xl font-russo text-nowrap  text-slate-900 uppercase">
              INR. 999
            </h1>
          </div>
        </div>
      </Modal>
      <div className="max-w-4xl min-h-[80vh] py-16 flex flex-col gap-2 mx-auto ">
        <h1 className="text-4xl text-center font-light text-slate-100 font-russo">
          Popular
        </h1>
        <h1 className="text-2xl text-center font-bold -mt-8 ml-22 text-amber-500 font-meine">
          programs
        </h1>
        <div className="flex flex-wrap justify-between w-full mt-4 items-start">
          {[1, 2, 3, 4].map((program) => (
            <div
              className="w-54 hover:shadow-xl shadow-amber-200/20 relative border border-white hover:border-amber-500 items-center h-[27rem] group rounded-xl overflow-hidden bg-white hover:bg-black flex flex-col cursor-pointer transform transition-all duration-500 xhover:mt-6"
              key={program}
            >
              {/* <div className="w-full h-56 overflow-hidden xrounded-md">
               
                </div> */}
              <div className="absolute -top-9 transition-all duration-500 group-hover:top-0 py-3 w-full z-5 px-3 flex flex-row justify-between">
                <HeartIcon className="text-slate-50 w-7 h-7 p-1.5 hover:bg-white rounded-full hover:text-amber-500" />
                <Handbag className="text-slate-50 w-7 h-7 p-1.5 hover:bg-white rounded-full hover:text-amber-500" />
              </div>
              <img
                onClick={() => setIsModalOpen({ vis: true, content: program })}
                src="https://jeffnippard.com/cdn/shop/files/ThePureBodybuildingProgram_4308fbb5-6e5a-4438-93d7-ee5690304e9d.jpg?v=1701208456&width=600"
                alt=""
                className="w-full h-auto z-0 object-cover group-hover:opacity-40 duration-300 group-hover:scale-180 origin-top-left transition-all duration-500"
              />
              <h1
                className="uppercase pointer-events-none text-sm group-hover:text-base [--outline-color:#ffffff]/50
         [--text-outline:0_1px_0_var(--outline-color),1px_0_0_var(--outline-color),0_-1px_0_var(--outline-color),-1px_0_0_var(--outline-color),-1px_-1px_0_var(--outline-color),1px_-1px_0_var(--outline-color),-1px_1px_0_var(--outline-color),1px_1px_0_var(--outline-color)]
         text-shadow-(--text-outline) transition-all duration-300 pb-1 z-1 w-full text-center font-thin font-russo mt-1 text-slate-900"
              >
                The pure body building program
              </h1>
              <Rate
                disabled
                value={5}
                allowHalf
                style={{ starColor: "blue" }}
                className="scale-75 pointer-events-none z-1 group-hover:text-shadow-md text-shadow-white text-nowrap"
              />

              <h1 className="text-xs pointer-events-none py-1 group-hover:scale-0 transition-all duration-700 group-hover:hidden w-full text-center uppercase text-slate-500 font-mont font-bold gap-1">
                Intermediate level
              </h1>
              <h1
                className="text-lg z-1 pointer-events-none font-russo [--outline-color:#ffffff]
         [--text-outline:0_1px_0_var(--outline-color),1px_0_0_var(--outline-color),0_-1px_0_var(--outline-color),-1px_0_0_var(--outline-color),-1px_-1px_0_var(--outline-color),1px_-1px_0_var(--outline-color),-1px_1px_0_var(--outline-color),1px_1px_0_var(--outline-color)]
         text-shadow-(--text-outline) text-nowrap  text-slate-900 uppercase"
              >
                INR. 999
              </h1>
              <div
                onClick={() => {
                  console.log("Add to Cart clicked");
                }}
                className="hover:bg-slate-50 border-white group-hover:border-t-2 bg-amber-400 group-hover:bg-amber-400 cursor-pointer text-white hover:text-slate-900 z-5 w-full font-russo text-center -bottom-6 transition-all duration-500 group-hover:bottom-0 py-2 text-sm absolute"
              >
                Add to Cart
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
