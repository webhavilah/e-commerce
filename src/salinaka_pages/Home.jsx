import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import logo from "/images/salinaka-logo.png";
import image from "/images/salinaka image.png";
import data from "../consumable/featured";
import dataTwo from "../consumable/featured-two";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import HomeProduct from "../components/HomeProduct";
import Footer from "../components/Footer";
 
const Home = () => {
  const imageStyle = {
    height: "100%",
    width: "100%",
  };

  return (
    <div>
      <Navbar />
      <div className="home overflow-x-hidden">
        <div className="lg:flex w-[85%] bg-[#f3f3f3] m-auto mt-30 ">
          <div className="lg:w-[50%] w-[80%] text-[#1a1a1a] my-auto pl-10 lg:pt-20 pt-10 pb-10">
            <h2 className="sm:text-4xl md:text-5xl lg:text-[50px] text-2xl max-w-sm md:leading-14 mb-6 ">
              <span className="capitalize font-bold">see</span> everything
              with <span className="capitalize font-bold">clarity</span>
            </h2>
            <p className="text-sm md:text-lg text-[#4a4a4a] font-bold  lg:w-md mb-4">
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—weve got your
              eyes covered.
            </p>
            <Link to="/shop">
              <button className="flex items-center justify-between bg-black text-white md:py-4 md:px-4 p-3.5 font-medium hover:bg-neutral-800 transition duration-400">
                Shop Now <FaArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
          <div className="my-auto">
            <img
              src={image}
              style={imageStyle}
              className="lg:"
              alt="salinaka's image"
            />
          </div>
        </div>
      </div>
     <HomeProduct data={data} sectionName='Featured Products' navigateTo='featured'/>
     <HomeProduct data={dataTwo} sectionName='Recommended Products' navigateTo='recommended'/>
    <Footer/>
    </div>
  );
};

export default Home;