import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/salinaka-logo.png";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleScroll } from "../utils/handleScroll";
import { IoMenuSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const navigate = useNavigate();
  const navbar = useRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [cartmenu, setCartmenu] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const { cart, clearCartItems, removeFromCart, addToCart, decreaseProduct, totalQuantity } = useContext(CartContext)

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

  const [itemQuantity, setItemQuantity] = useState(1)
  console.log(cart)

  const displayTotalPrice = () => {
    console.log(cart.price)
    setTotalPrice(totalPrice + 1)

  }
  useEffect(() => {
    displayTotalPrice()
  }, [])

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

                <div className=" hover:bg-[#d3d3d335] text-center py-2.5 px-4 relative" onClick={() => setCartmenu(!cartmenu)}>
                  <AiOutlineShopping className="text-2xl  text-black" />
                  <span className="absolute top-0 right-0">
                      {
                        cart.length > 0 ? 
                        <p className="text-sm bg-red-500 rounded-[50%] size-5 text-white text-bold">{totalQuantity}</p> :
                        ''
                      }
                  </span>
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
          className={`lg:hidden shadow-lg flex flex-col w-auto sm:w-60 sm:py-0 pb-7 pt-4 pl-5  h-auto fixed z-10 top-[15vh] right-0 justify-center bg-white
        transition-transform duration-300 ease-out 
        ${isMobileNavOpen ? "translate-x-0 right-4" : "translate-x-full"}`}
        >
        <div className="flex flex-col sm:mt-3">
        <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/">Home</NavLink>
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/shop">Shop</NavLink>
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/featured">Featured</NavLink>
          <NavLink onClick={handleScroll} className={({ isActive }) => `${isActive ? "text-black" : "text-gray-500"} text-sm font-semibold hover:bg-[#0000000e] px-4 py-2.5`} to="/recommended">Recommended</NavLink>

        </div>
          <div className="items-center xl:w-[60%] lg:w-[50%] mr-10 flex sm:hidden">
            <div className="bg-white flex space-x-3 border border-[#E5E5E5] items-center px-4 py-2">
              <IoIosSearch className="text-lg" />
              <input type="text" className="placeholder:text-[13px] xl:pr-15 lg:pr-7 focus:ring-0 focus:border-transparent focus:outline-none" placeholder="Search product..." />
            </div>
            <div className=" hover:bg-[#d3d3d335] text-center py-2.5 px-4 relative" onClick={() => setCartmenu(!cartmenu)}>
              <AiOutlineShopping className="text-2xl  text-black" />
              <span className="absolute top-0 right-0">
                {
                  cart.length > 0 ? (
                    <p className="text-sm bg-red-500 rounded-[50%] size-5 text-white text-bold ">{totalQuantity}</p>
                  ) :
                    ''
                }
              </span>
            </div>
            
        </div>
            <div className="flex mt-5 mb-0 sm:mb-6 space-x-4 sm:mt-2">
                <button onClick={() => { handleScroll(); navigate("/signup"); }} className="bg-black text-white text-[12px] font-semibold py-2 px-4 hover:bg-neutral-800">Sign Up</button>
                <button onClick={() => { handleScroll(); navigate("/signin"); }} className="bg-[#f2f2f2] text-gray-500 text-[12px] font-semibold py-2 px-4 border border-[#DFDFDF] hover:bg-white">Sign In</button>
              </div>
          </div>
        {
          // cartmenu && (
          <div className="flex justify-end">
            <div className={`h-screen fixed md:w-[70vw] lg:w-[50vw] xl:w-[44vw] sm:w-[80vw]  w-full  z-20 bg-white shadow-2xl py-7 transition-all duration-300 ease-in-out ${cartmenu ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex  justify-between items-center w-90/100 m-auto">
                <div className="flex space-x-3 items-center">
                  <h3 className="font-bold">My Basket</h3>
                  <p className="font-semibold text-[13px] text-gray-600">( {cart.length} item)</p>
                </div>
                <div className="flex">
                  <button className="py-2 cursor-pointer border border-zinc-300 px-4 font-semibold text-[13px] text-gray-800 max-[400px]:px-3 max-[400px]:py-1.5 max-[400px]:text-[12px]" onClick={() => setCartmenu(!cartmenu)}>Close</button>
                  <button className={`${cart.length === 0 ? 'cursor-not-allowed text-gray-400' : " cursor-pointer text-gray-600"}py-2  border border-zinc-200 px-4 font-semibold text-[13px] max-[400px]:text-[12px]`} onClick={() => clearCartItems()}>Clear Basket</button>
                </div>
              </div>
              <div className="h-[80%] ">
                {cart.length > 0 ? (
                  <div className="overflow-y-auto max-h-[90%] ">
                    {
                      cart.map((item, id) => {
                        const totalPrice = item.price * (item.quantity);
                        return (
                          <div key={id} className="w-full">
                            <div className="w-9/10 border border-gray-200 flex my-3 m-auto shadow-sm">
                              <div className="flex flex-col w-7/100">
                                <button onClick={() => {
                                  addToCart(item)
                                  console.log(item)
                                }} className="border border-gray-300 m-auto w-full py-3">+</button>
                                <button
                                  disabled={item.quantity === 1}
                                  onClick={() => decreaseProduct(item)} className={`border border-gray-300 m-auto w-full py-3
                                  ${item.quantity === 1 ? "cursor-not-allowed opacity-50" : ""}`} >
                                  -
                                </button>
                              </div>
                              <div className="flex items-center w-10/10">
                                <div className="w-[30%] max-[412px]:mr-2 ">
                                  <img src={item.imgUrl} className="h-17 w-full" alt="" />
                                </div>
                                <div className="w-25/100">
                                  <h3 onClick={() => navigate(`/product/${id}`)} className=" text-gray-900 font-semibold mb-2 cursor-pointer underline ">{item.brand}</h3>
                                  <div className="space-y-1">
                                    <p className="text-gray-500 text-[13px] font-semibold ">Quantity</p>
                                    <p className="font-semibold text-sm ">{item.quantity}</p>
                                  </div>
                                </div>
                                <div className="text-black w-25/100 h-full pt-11 space-y-1 max-[412px]:ml-2">
                                  <p className="text-gray-500 text-[13px] font-semibold">Size</p>
                                  <p className="font-semibold text-sm">28mm</p>
                                </div>

                                <div className="text-lg font-semibold w-20/100 max-[412px]:text-[16px] max-[412px]:mr-6"> ${totalPrice}.00 </div>
                              </div>
                              <div className="flex items-center justify-center w-2/10 ">
                                <p className="text-xl border border-gray-300 p-3" onClick={() => removeFromCart(item.id)}><IoMdClose /></p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                    {/* </div> */}
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <p className="text-gray-400 font-semibold">Your cart is empty</p>
                  </div>
                )}
              </div>
              <div className="h-px bg-gray-300 w-95/100 m-auto"></div>
              <div className=" h-[20%] flex justify-between items-center w-95/100 m-auto">
                <div className="flex justify-between space-y-5 w-5/10 flex-col mb-3">
                  <p className="font-semibold text-[11px] text-gray-900">Subtotal amount:</p>
                  <h3 className="font-semibold text-2xl"> ${
                    cart.reduce((prev, item) => {
                      return prev + item.price * (item.quantity)
                    }, 0)
                  }.00

                  </h3>
                </div>
                <div className="">
                  <button className={`${cart.length > 0 ? "bg-black " : "bg-neutral-500 cursor-not-allowed "} hover:bg-neutral-800 text-white py-3 px-6 font-semibold uppercase bg-black transition duration-1000`}>Check Out</button>
                </div>
              </div>

            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Navbar;