import React, { useEffect, useRef } from 'react';
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import dataFour from '../consumable/featured-four';
import { handleScroll } from "../utils/handleScroll";
import { Link, NavLink, useNavigate } from 'react-router-dom';

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
      <header ref={navbar} className="h-30 fixed w-full z-50 flex items-center justify-center top-0">
        <nav className="flex justify-center items-center w-[94%]">
          <div className="w-[60%]">
            <ul className="flex items-center">
              <Link to="/">
                <img src={logo} className="h-[50px]" alt="" />
              </Link>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                }
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                }
                to="/featured"
              >
                Featured
              </NavLink>
              <NavLink
                onClick={handleScroll}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-5 transition py-2.5`
                }
                to="/recommended"
              >
                Recommended
              </NavLink>
            </ul>
          </div>

          <div className="flex w-[50%] justify-between">
            <div className="flex items-center w-[60%]">
              <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
                <IoIosSearch className="text-lg" />
                <input
                  type="text"
                  className="placeholder:text-[13px] pr-15 focus:ring-0 focus:border-transparent focus:outline-none"
                  placeholder="Search product..."
                />
              </div>
              <div className="hover:bg-[#F2F2F2] text-center py-2.5 px-4">
                <AiOutlineShopping className="text-2xl text-black" />
              </div>
            </div>

            <div className="w-[26%] flex items-center space-x-3.5 justify-between">
              <button
                onClick={() => {
                  handleScroll();
                  navigate('/signup');
                }}
                className="bg-black text-white text-[12px] font-semibold py-2.5 px-4 hover:bg-neutral-800 transition duration-400"
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  handleScroll();
                  navigate('/signin');
                }}
                className="bg-[#f2f2f2] text-gray-500 text-[12px] font-semibold py-[9px] px-4 border border-[#DFDFDF] hover:bg-white transition duration-400"
              >
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>

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