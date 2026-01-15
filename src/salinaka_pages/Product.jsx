import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../consumable/featured";
import dataTwo from "../consumable/featured-two";
import { FaAngleDown } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const Product = () => {
    const { id } = useParams();
    const { addToCart, cart } = useContext(CartContext)
    const allItems = [...data, ...dataTwo];
    const item = allItems[id];

    const isInCart = cart.some(cartItem => cartItem.id === item.id);

    if (!item) {
        return (
            <>
                <Navbar />
                <h1 className="text-center mt-20 text-3xl">Product Not Found</h1>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className=" sm:mt-40 pt-[10vh] sm:pt-0 ">
                <div className="sm:flex justify-center items-center sm:w-[70%] w-[80%] border border-gray-200 m-auto bg-[#f9f9f9] ">
                    <div className="sm:w-1/2 z-20 sm:h-auto h-50 flex justify-center items-center" >
                        <img src={item.imgUrl} className="w-auto bg-[#f9ff9] h-40 sm:h-auto" alt="" />
                    </div>
                    <div className="sm:w-1/2 bg-white h-full space-y-5 px-5 sm:pb-10 pb-7 sm:pt-5">
                        <div className="border-b border-b-gray-200 py-6 ">
                            <p className="font-semibold text-zinc-500 sm:text-sm text-[13px]">{item.brand}</p>
                            <h1 className="sm:text-3xl text-xl font-bold">{item.brand}</h1>
                            <p className="text-zinc-700 font-semibold text-[12px] mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus pariatur ullam distinctio obcaecati sunt qui, ad debitis exercitationem repellendus!</p>
                        </div>
                        <div className="space-y-4 ">
                            <p className="font-semibold text-zinc-500 text-[13px] max-[359px]:hidden">Lens Width and Frame Size</p>
                            <div className="flex justify-center items-center border border-gray-300 py-2 rounded max-[359px]:hidden">
                                <input type="text" className="placeholder:text-zinc-400 placeholder:sm:text-lg  placeholder:font-semibold w-100 pl-3 focus:ring-0 focus:border-transparent focus:outline-none" placeholder="-Select Size- " />
                                <div className="flex bg-amber-00 w-1/6 justify-evenly items-center">
                                    <div className="w-px h-5  bg-gray-500"></div>
                                    <FaAngleDown className="hover:text-gray-400 transition" />
                                </div>
                            </div>
                            <button disabled={isInCart} onClick={() => {
                                    addToCart(item);
                                    toast.success(`${item.brand} added to cart`, {
                                        icon: false,
                                        hideProgressBar: true,
                                        autoClose: 1000,
                                        style: {
                                          backgroundColor: "#bbf7d0", 
                                          color: "#14532d",           
                                          borderRadius: "5px",
                                          fontWeight: "600",
                                          width: "auto",
                                          fontSize: "12px",
                                          border: "1px solid #14532d",
                                          fontFamily: "Tajawal, 'sans-serif'",
                                          marginTop: "100px", marginRight: "40px",
                                        },
                                      });
                                }} className={`flex items-center justify-between sm:text-sm text-[13px] sm:py-3 sm:px-4 py-2.5 px-3 font-medium capitalize transition duration-400 
                                    ${ isInCart ? 
                                        "bg-gray-400 cursor-not-allowed text-white" : 
                                        "bg-black text-white hover:bg-neutral-800"
                                    }`} >
                                        
                                {isInCart ? "Already in cart" : "Add to basket"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
