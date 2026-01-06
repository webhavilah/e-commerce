import React from "react";
import data from "../consumable/featured";
import image from "../assets/Recommended page image.png";
import Navbar from "../components/Navbar";

const Recommended = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-[85%] bg-[#f3f3f3] m-auto mt-30 h-[400px] max-[350px]:h-70 justify-between">
        <div className="w-[50%] text-[#1a1a1a] my-auto pl-10 pt-20 pb-10">
          <h2 className="text-[50px] max-[400px]:text-3xl max-[500px]:text-4xl md:text-[40px] font-bold lg:text-[50px] xl:mr-0 mr-200">Recommended Products</h2>
        </div>

          <div
            className="w-[50%] h-full bg-no-repeat max-[500px]:hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "left",
              backgroundSize: "100%",
            }}
            
          ></div>
      </div>
      <div className="w-[80%] m-auto mt-30 h-auto lg:pb-70 md:pb-200 pb-110 overflow-hidden">
        <div className="mb-320 grid lg:grid-cols-3 md:grid-cols-2 md:mb-110 gap-5 h-70 lg:mb-40 sm:grid-cols-2 sm:mb-110 w-full">
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
