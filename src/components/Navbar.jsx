import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleScroll } from "../utils/handleScroll";
import { IoMenuSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const navbar = useRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [cartmenu, setCartmenu] = useState(false)
  const { cart } = useContext(CartContext)

  useEffect(() => {
    const onScroll = () => {
      if (!navbar.current) return;
      if (window.scrollY < 50) {
        navbar.current.classList.add("h-30");
        navbar.current.classList.remove("shadow-md", "h-[10%]", "bg-white");
      } else {
        navbar.current.classList.add("shadow-md", "h-[10%]", "bg-white");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log("cart items:", cart)


  return (
    <>
      <div className="" >
        <header
          ref={navbar}
          className="h-30 fixed w-full z-10 flex items-center justify-center top-0"
        >
          <nav className="flex items-center justify-between w-[95%]">
            <div className="flex items-center w-auto lg:w-[60%] md:w-[30%]">
              <Link to="/">
                <img src={logo} className="h-[50px]" alt="" />
              </Link>

              <div className="hidden lg:flex items-center ml-6">
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/">Home</NavLink>
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/shop">Shop</NavLink>
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/featured">Featured</NavLink>
                <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/recommended">Recommended</NavLink>
              </div>
            </div>

            <div className="flex xl:w-[40%] lg:w-[50%] justify-evenly items-center">
              <div className="items-center xl:w-[60%] lg:w-[50%] mr-10 hidden sm:flex">
                <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
                  <IoIosSearch className="text-lg" />
                  <input type="text" className="placeholder:text-[13px] xl:pr-15 lg:pr-7 focus:ring-0 focus:border-transparent focus:outline-none" placeholder="Search product..." />
                </div>

                <div className=" hover:bg-[#d3d3d335] text-center py-2.5 px-4 " onClick={() => setCartmenu(!cartmenu)}>
                  <AiOutlineShopping className="text-2xl  text-black" />
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-3 xl:w-[40%] lg:w-[50%] justify-end">
                <button onClick={() => { handleScroll(); navigate("/signup"); }} className="bg-black text-white xl:text-[12px] lg:text-[11px] font-semibold xl:py-2.5 lg:py-2 lg:px-3 xl:px-4 hover:bg-neutral-800">Sign Up</button>
                <button onClick={() => { handleScroll(); navigate("/signin"); }} className="bg-[#f2f2f2] text-gray-500 xl:text-[12px] lg:text-[11px] font-semibold xl:py-2.5 lg:py-2 lg:px-3 xl:px-4 border border-[#DFDFDF] hover:bg-white">Sign In</button>
              </div>

              <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                <IoMenuSharp className="text-3xl cursor-pointer lg:hidden" />
              </button>
            </div>
          </nav>
        </header>

        <div
          className={`lg:hidden shadow-lg flex flex-col w-auto sm:w-60 sm:py-0 py-30 pl-5  h-50 fixed z-10 top-[15vh] right-0 justify-center bg-white
        transition-transform duration-300 ease-out
        ${isMobileNavOpen ? "translate-x-0 right-4" : "translate-x-full"}`}
        >
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/">Home</NavLink>
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/shop">Shop</NavLink>
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/featured">Featured</NavLink>
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/recommended">Recommended</NavLink>

          <div className="items-center xl:w-[60%] lg:w-[50%] mr-10 flex sm:hidden">
            <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
              <IoIosSearch className="text-lg" />
              <input type="text" className="placeholder:text-[13px] xl:pr-15 lg:pr-7 focus:ring-0 focus:border-transparent focus:outline-none" placeholder="Search product..." />
            </div>
            <div className="hover:bg-[#F2F2F2] text-center py-2.5 px-4">
              <AiOutlineShopping className="text-2xl text-black" />
            </div>
          </div>
        </div>
        {
          // cartmenu && (
          <div className="flex justify-end">

            <div className={`h-screen fixed w-44/100 z-20 bg-white py-7 transition-all duration-300 ease-out ${cartmenu ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex  justify-between items-center w-90/100 m-auto">
                <div className="flex space-x-3 items-center">
                  <h3 className="font-bold">My Basket</h3>
                  <p className="font-semibold text-[13px] text-gray-600">( {cart.length} item)</p>
                </div>
                <div className="flex">
                  <button className="py-2 cursor-pointer border border-zinc-300 px-4 font-semibold text-[13px] text-gray-800" onClick={() => setCartmenu(!cartmenu)}>Close</button>
                  <button className="py-2 cursor-not-allowed border border-zinc-200 px-4 font-semibold text-[13px] text-gray-400">Clear Basket</button>
                </div>
              </div>
              <div className="bg-green-200">
                {/* <div className="flex"> */}
                {
                  cart.map((item, id) => {
                    return (
                      <div key={id} className="bg-amber-500 flex my-2">
                        <div className="flex flex-col">
                          <button className="border border-gray-300 m-auto py-2 px-3">+</button>
                          <button className="border border-gray-300 m-auto py-2 px-3">-</button>
                        </div>
                        <h3>{item.brand}</h3>
                      </div>
                    )
                  })
                }
                {/* </div> */}
              </div>

            </div>
          </div>
          // )
        }

      </div>
    </>
  );
}

export default Navbar;
