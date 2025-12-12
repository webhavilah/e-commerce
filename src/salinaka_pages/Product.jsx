import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../consumable/featured";
import dataTwo from "../consumable/featured-two";

const Product = () => {
    const { id } = useParams();

    const allItems = [...data, ...dataTwo];
    const item = allItems[id];

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
                <div className="flex justify-center items-center w-[70%] border border-gray-200 m-auto bg-white">
                    <img src={item.imgUrl} className="w-1/2 bg-[#f9f9f9]" alt="" />
                    <div className="w-1/2 bg-white h-full space-y-5 px-5">
                        <div className="border-b border-b-gray-200 py-7 " style={{ borderWidth: "" }}>
                            <p className="font-semibold text-zinc-500 text-sm">{item.brand}</p>
                            <h1 className="text-3xl font-bold">{item.brand}</h1>
                            <p className="text-zinc-700 font-semibold text-[12px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptatibus pariatur ullam distinctio obcaecati sunt qui, ad debitis exercitationem repellendus!</p>
                        </div>
                        <div className="">
                            <p className="font-semibold text-zinc-500 text-[13px]">Lens Width and Frame Size</p>
                            <input type="password" className="" />
                            <button className="flex items-center justify-between bg-black text-white text-sm py-3 px-4 font-medium hover:bg-neutral-800 transition duration-400 capitalize">
                                Add to basket 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
