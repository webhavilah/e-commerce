import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import logo from "../assets/salinaka-logo.png";
import image from "../assets/salinaka image.png";
import data from "../consumable/featured";
import dataTwo from "../consumable/featured-two";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import HomeProduct from "../components/HomeProduct";
 
const Home = () => {
  const imageStyle = {
    height: "100%",
    width: "100%",
  };

  // const handleClick = ()=>{
    const navigate = useNavigate()
  // }
    
    // if ("box" === onClick) {
    //     id == 1
    // }

  return (
    <div>
      <Navbar />
      <div className="home ">
        <div className="flex flex-col sm:flex-row w-[85%] bg-[#f3f3f3] m-auto mt-30 ">
          <div className="lg:w-[50%] md:w-2/4 text-[#1a1a1a] my-auto pl-10 pt-20 pb-10">
            <h2 className="text-3xl lg:text-[50px] lg:max-w-sm  lg:leading-14 sm:mb-6 ">
              <span className="capitalize font-bold">see</span> everything
              with <span className="capitalize font-bold">clarity</span>
            </h2>
            <p className="text-sm lg:text-lg text-[#4a4a4a] font-bold  lg:w-md mb-4">
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—weve got your
              eyes covered.
            </p>
            <Link to="/shop">
              <button className="flex items-center justify-between bg-black text-white py-4 px-4 font-medium hover:bg-neutral-800 transition duration-400">
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
     <HomeProduct data={data} sectionName='Featured Products'/>
     <HomeProduct data={dataTwo} sectionName='Recommended Products'/>
  
      <div className="bg-[#F0F0F0] h-46 flex w-full">
        <div className="flex w-[93%] justify-between m-auto h-30 items-center">
          <div className="">
          <h4 className="text-[13px] text-[##4A4A4A]">Developed by <span className="underline font-bold"> Ayanfe & HAVILAH</span></h4>
        </div>
        <div className="items-center h-full grid mr-10 px-10">
          <img src={logo}  style={{width: "150px", paddingBottom: "20px"}} alt="" />
          <p className="text-center font-medium">© 2025</p>
        </div>
        <div className="">
          <h4 className="text-[13px] text-[##4A4A4A]">Fork this project  <span className="underline font-medium">HERE</span></h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
