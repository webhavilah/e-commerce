import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../consumable/featured";
import dataTwo from "../consumable/featured-two";
import { FaAngleDown } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

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
            <div className=" mt-40 ">
                <div className="flex justify-center items-center w-[70%] border border-gray-200 m-auto bg-[#f9f9f9] ">
                    <div className="w-1/2 " >
                        <img src={item.imgUrl} className="w-full bg-[#f9ff9] " alt="" />
                    </div>
                    <div className="w-1/2 bg-white h-full space-y-5 px-5 pb-10 pt-5">
                        <div className="border-b border-b-gray-200 py-6 ">
                            <p className="font-semibold text-zinc-500 text-sm">{item.brand}</p>
                            <h1 className="text-3xl font-bold">{item.brand}</h1>
                            <p className="text-zinc-700 font-semibold text-[12px] mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus pariatur ullam distinctio obcaecati sunt qui, ad debitis exercitationem repellendus!</p>
                        </div>
                        <div className="space-y-4">
                            <p className="font-semibold text-zinc-500 text-[13px]">Lens Width and Frame Size</p>
                            <div className="flex justify-center items-center border border-gray-300 py-2 rounded">
                                <input type="text" className="placeholder:text-zinc-400 placeholder:text-lg  placeholder:font-semibold w-100 pl-3 focus:ring-0 focus:border-transparent focus:outline-none" placeholder="-Select Size- " />
                                <div className="flex bg-amber-00 w-1/6 justify-evenly items-center">
                                    <div className="w-px h-5  bg-gray-500"></div>
                                    <FaAngleDown className="hover:text-gray-400 transition" />
                                </div>
                            </div>
                            <button disabled={isInCart} onClick={() => {
                                    addToCart(item);
                                    alert(`${item.brand} added to cart`);
                                }} className={`flex items-center justify-between text-sm py-3 px-4 font-medium capitalize transition duration-400 
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
