import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import image from "../assets/salinaka image.png";
import data from "../consumable/featured";
import dataTwo from "../consumable/featured-two";

const Home = () => {
  const imageStyle = {
    height: "100%",
    width: "100%",
  };
  return (
    <div>
      <div className="home">
        <div className="flex w-[85%] bg-[#f3f3f3] m-auto mt-30 ">
          <div className="w-[50%] text-[#1a1a1a] my-auto pl-10 pt-20 pb-10">
            <h2 className="text-[50px] max-w-sm leading-14 mb-6 ">
              <span className="capitalize font-medium">see</span> everything
              with <span className="capitalize font-medium">clarity</span>
            </h2>
            <p className="text-md text-[#4a4a4a] font-semibold  w-md mb-4">
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
            <button className="flex items-center justify-between bg-black text-white py-4 px-4 font-medium hover:bg-neutral-800 transition duration-400">
              Shop Now <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-[50%] ">
            <img
              src={image}
              style={imageStyle}
              className=""
              alt="salinaka's image"
            />
          </div>
        </div>
      </div>
      <div className=" w-[80%] m-auto mt-20 h-auto pb-80">
        <div className="flex w-full justify-between">
          <h1 className="text-black font-medium text-4xl pb-7">
            Featured Products
          </h1>
          <h2 className="float-r font-100 text-xl underline">See All</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 h-70 mb-10 w-full">
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
                    className=" mx-auto w-74 h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#F9F9F9] p-4">
                  <h2 className="font-medium text-2xl">{data.brand}</h2>
                  <p
                    className="text-[#8E8E8E] font-medium "
                    style={{ fontStyle: "italic", fontSize: "17px" }}
                  >
                    {data.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-[80%] m-auto mt-20 h-auto pb-80">
        <div className="flex w-full justify-between">
          <h1 className="text-black font-medium text-4xl pb-7">
            Recommended Products
          </h1>
          <h2 className="float-r font-100 text-xl underline">See All</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 h-70 mb-10 w-full">
          {dataTwo.map((dataTwo, id) => {
            return (
              <div
                key={id}
                className="w-full gap-6 border border-[#E5E5E5] shadow-sm cursor-pointer "
              >
                <div className="h-[200px] bg-[#F2F2F2] ">
                  <img
                    src={dataTwo.imgUrl}
                    alt={dataTwo.brand + "'s image"}
                    className=" mx-auto w-74 h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#F9F9F9] p-4">
                  <h2 className="font-medium text-2xl">{dataTwo.brand}</h2>
                  <p
                    className="text-[#8E8E8E] font-medium "
                    style={{ fontStyle: "italic", fontSize: "17px" }}
                  >
                    {dataTwo.name}
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

export default Home;