import React from 'react'
import logo from "/images/salinaka-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#F0F0F0] h-46 flex w-full top-full">
            <div className="flex w-[93%] justify-between m-auto h-30 items-center">
                <div className="">
                    <h4 className="text-[13px] text-[##4A4A4A]">Developed by <span className="underline font-bold"> Ayanfe & HAVILAH</span></h4>
                </div>
                <div className="items-center h-full grid mr-10 px-10">
                    <img src={logo} className="w-[150px] pb-5" alt="" />
                    <p className="text-center font-medium">© 2026</p>
                </div>
                <div className="">
                    <h4 className="text-[13px] text-[##4A4A4A]">Fork this project  <span className="underline font-bold">HERE</span></h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer