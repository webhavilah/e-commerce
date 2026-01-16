import dataThree from "../consumable/featured-three";
import imageTwo from "/images/salinaka-f-image.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center gap-10 w-[85%] bg-[#f3f3f3] m-auto mt-30 lg:h-[400px] py-10 px-12 justify-between">
        <div className=" text-[#1a1a1a] ">
          <h2 className="lg:text-5xl text-4xl font-bold">
            Featured Products
          </h2>
        </div>
       <div className="relative overflow-hidden lg:w-[50%] w-full h-[300px] lg:h-[400px]">
        <img src={imageTwo} alt="" className="object-cover scale-110 w-full h-full" />
       </div>
      </div>
      <div className="w-[80%] m-auto mt-30 h-auto lg:pb-150 md:pb-240 pb-340 overflow-hidden">
        <div className="mb-320 grid lg:grid-cols-3 md:grid-cols-2 md:mb-110 gap-5 h-70 lg:mb-40 sm:grid-cols-2 sm:mb-110 w-full">
          {dataThree.map((dataThree, id) => {
            return (
              <div
                key={id}
                className="box w-full gap-6 border border-[#E5E5E5] shadow-sm cursor-pointer"
                onClick={() => navigate(`/product/${id}`)}
              >
                <div className="h-[200px] bg-[#F2F2F2] ">
                  <img
                    src={dataThree.imgUrl}
                    alt={dataThree.brand + "'s image"}
                    className=" mx-auto w-[80%] h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#F9F9F9] p-4">
                  <h2 className="font-bold text-2xl">{dataThree.brand}</h2>
                  <p className="text-[#8E8E8E] font-bold italic text-[17px]">
                    {dataThree.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Featured;
