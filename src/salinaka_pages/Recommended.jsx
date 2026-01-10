import React from "react";
import data from "../consumable/featured";
import image from "../assets/Recommended page image.png";
import Navbar from "../components/Navbar";

const Recommended = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center gap-10 sm:w-[85%] w-[85%] bg-[#f3f3f3] m-auto mt-30 lg:h-[400px] lg:py-10 md:py-5 justify-between">
        <div className=" text-[#1a1a1a] px-12 lg:w-[50%]">
          <h2 className="lg:text-5xl text-4xl font-bold max-lg:pt-10">Recommended Products</h2>
        </div>
        <div className="relative overflow-hidden lg:w-[50%] sm:w-[80%] md:pl-0 lg:pl-0 h-[400px] lg:h-[400px]">
          <img
            src={image}
            alt=""
            className="object-cover scale-120 w-full h-full ml-6 items-center"
          />
        </div>
      </div>
      <div className="w-[80%] m-auto mt-30 h-auto lg:pb-70 md:pb-90  pb-100 overflow-hidden">
        <div className="mb-320 grid lg:grid-cols-3 md:grid-cols-2 md:mb-110 gap-5 h-70 lg:mb-0 sm:grid-cols-2 sm:mb-110 w-full">
          {data.map((data, id) => {
            return (
              <div
                key={id}
                className="w-full gap-6 border border-[#E5E5E5] shadow-sm cursor-pointer "
              >
                <div className="h-[200px] bg-[#F2F2F2] ">
                  <img
                    src={data.imgUrl}
                    alt={data.brand + "'s image"}
                    className=" mx-auto w-[80%] h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#F9F9F9] p-4">
                  <h2 className="font-bold text-2xl">{data.brand}</h2>
                  <p
                    className="text-[#8E8E8E] font-bold "
                    style={{ fontStyle: "italic", fontSize: "16px" }}
                  >
                    {data.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
