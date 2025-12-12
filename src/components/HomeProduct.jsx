import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeProduct = ({data, sectionName}) => {
    const navigate = useNavigate()
  return (
    <div className=" w-[80%] m-auto mt-20 h-auto pb-80">
    <div className="flex w-full justify-between">
      <h1 className="text-black font-medium text-4xl pb-7">
        {sectionName}
      </h1>
      <h2 className="float-r font-100 text-xl underline">See All</h2>
    </div>
    <div className="grid lg:grid-cols-3 gap-5 h-70 mb-10 w-full">
      {data.map((data, id) => {
        return (
          <div
            key={id}
            className="box w-full gap-6 border border-[#E5E5E5] shadow-sm cursor-pointer " onClick={()=> navigate(`/product/${id}`)
          } 
          >
            <div className="h-[200px] bg-[#F2F2F2] ">
              <img
                src={data.imgUrl}
                alt={data.brand + "'s image"}
                className=" mx-auto w-74 h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#F9F9F9] p-4">
              <h2 className="font-medium text-2xl">{data.brand}</h2>
              <p
                className="text-[#8E8E8E] font-medium "
                style={{ fontStyle: "italic", fontSize: "17px" }}
              >
                {data.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default HomeProduct