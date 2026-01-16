import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import dataFour from "../consumable/featured-four";

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
        }
      }
    };
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow mt-32">
        <div className="w-[87%] m-auto">
          <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 pb-40">
            {dataFour.map((item, id) => (
              <div
                key={id}
                className="relative group border border-[#E1E1E1] cursor-pointer flex flex-col overflow-hidden h-[250px]"
              >
                <div className="h-[100px] bg-[#F2F2F2] flex items-center justify-center group-hover:h-20 transition-all">
                  <img
                    src={item.imgUrl}
                    alt={item.brand}
                    className="w-35 h-full group-hover:scale-90 transition-transform"
                  />
                </div>

                <div className="bg-[#F9F9F9] text-center flex-1">
                  <h2 className="font-bold text-[14px]">{item.brand}</h2>
                  <p className="text-[#BBB6B6] font-bold italic text-[13px]">
                    {item.name}
                  </p>
                  <h3 className="py-4 font-bold">${item.amount}.00</h3>
                </div>

                <div className="absolute bottom-0 w-full bg-black text-white text-center font-bold text-sm py-3 translate-y-12 group-hover:translate-y-0 transition-transform">
                  <p onClick={() => navigate(`/product/${item.id}`)}>
                    Add to basket
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
