import React, { useEffect, useRef } from 'react';
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import dataFour from '../consumable/featured-four';
import { handleScroll } from "../utils/handleScroll";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Shop = () => {
  const navigate = useNavigate();
  const navbar = useRef(null);

  useEffect(() => {
    const handleScrollNav = () => {
      if (navbar.current) {
        if (window.scrollY < 50) {
          navbar.current.classList.add("h-30");
          navbar.current.classList.remove("shadow-md", "h-[10%]", "bg-white");
        } else {
          navbar.current.classList.add("shadow-md", "h-[10%]", "bg-white");
          navbar.current.classList.remove("bg-red-500");
        }
      }
    };
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="mt-26">
        <div className="w-[87%] m-auto h-auto">
          <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 h-70 w-full">
            {dataFour.map((item, id) => (
              <div
                key={id}
                className="relative group w-full gap-6 border border-[#E1E1E1] cursor-pointer flex flex-col overflow-hidden h-[250px]"
                
              >
                <div className="h-[120px] bg-[#F2F2F2] flex items-center justify-center transition-all duration-300 group-hover:h-20">
                  <img
                    src={item.imgUrl}
                    alt={item.brand + "'s image"}
                    className="mx-auto w-35 h-full transition-transform duration-300 group-hover:scale-90"
                  />
                </div>

                <div className="bg-[#F9F9F9] py-4 text-center flex-1 transition-all duration-300">
                  <h2 className="font-bold text-1xl">{item.brand}</h2>
                  <p className="text-[#8E8E8E] font-bold pt-2 italic text-[15px]">
                    {item.name}
                  </p>
                  <h3 className="py-4 font-bold">{item.amount}</h3>
                </div>

                <div className="absolute bottom-0 left-0 w-full mt-30 bg-black text-white text-center font-bold text-sm py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p>Add to basket</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;