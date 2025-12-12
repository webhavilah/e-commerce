import React from "react";
import data from "../consumable/featured";
import image from "../assets/Recommended page image.png";
import Navbar from "../components/Navbar";

const Recommended = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-[85%] bg-[#f3f3f3] m-auto mt-30 h-[400px] justify-between">
        <div className="w-[50%] text-[#1a1a1a] my-auto pl-10 pt-20 pb-10">
          <h2 className="text-[50px] font-medium">Recommended Products</h2>
        </div>
        <div className="w-[50%] h-full bg-no-repeat">
          <img className="w-150 h-full float-end ml-40" src={image} alt="" />
        </div>
      </div>
      <div className="w-[80%] m-auto mt-25 mb-35">
        <div className="grid lg:grid-cols-3 gap-5  ">
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
    </div>
  );
};

export default Recommended;
