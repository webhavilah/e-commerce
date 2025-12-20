import dataThree from "../consumable/featured-three";
import imageTwo from "../assets/salinaka-f-image.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar />
      <div className="flex w-[85%] bg-[#f3f3f3] m-auto mt-30 h-[400px] justify-between">
        <div className="w-[65%] text-[#1a1a1a] my-auto pl-10 pt-20 pb-10">
          <h2 className="text-[50px] font-bold">Featured Products</h2>
        </div>

          <div
            className="w-[50%] h-full bg-no-repeat"
            style={{
              backgroundImage: `url(${imageTwo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundSize: "120%",
            }}
            
          ></div>
      </div>
      <div className=" w-[80%] m-auto mt-30 h-auto pb-200 overflow-hidden">
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
                <p
                  className="text-[#8E8E8E] font-bold italic text-[17px]"
                >
                  {dataThree.name}
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

export default Featured;