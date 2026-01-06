import React from "react";
import { handleScroll } from "../utils/handleScroll";
import { useNavigate } from "react-router-dom";

const HomeProduct = ({ data, sectionName, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <>
    <div className=" w-[80%] m-auto mt-20 h-auto pb-80">
      <div className="flex w-full justify-between h-auto my-auto items-center mb-7">
        <h1 className="text-black font-bold text-[20px] lg:text-4xl md:text-4xl sm:text-2xl items-center">{sectionName}</h1>
        <h2
          className="float-r font-bold md:text-xl text-[17px] underline"
          onClick={() => {
            handleScroll();
            navigate(`/${navigateTo}`);
          }}
        >
          See All
        </h2>
      </div>
      <div className="mb-320 grid lg:grid-cols-3 md:grid-cols-2 md:mb-110 gap-5 h-70 lg:mb-40 sm:grid-cols-2 sm:mb-110 w-full">
        {data.map((data, id) => {
          return (
            <div
              key={id}
              className="box w-full gap-6 border border-[#E5E5E5] shadow-sm cursor-pointer"
              onClick={() => navigate(`/product/${id}`)}
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
                  className="text-[#8E8E8E] font-bold italic text-[17px]"
                >
                  {data.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default HomeProduct;