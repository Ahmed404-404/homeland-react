import React, { useContext } from "react";
import { HousesData } from "../store/housesData";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListView = () => {
  const { houses, loading } = useContext(HousesData);

  if(loading){
    return (
      <div className=" w-full py-8 flex justify-center mx-auto">
      <AiOutlineLoading3Quarters className="text-violet-700 text-4xl animate-spin" />
      </div>
    )
  }

  if(houses.length < 1){
    return (
      <div className=" w-full py-8 flex justify-center mx-auto">
        <span className="text-gray-400 text-4xl">sorry not founded !!</span>
      </div>
    )
  }

  return(
    <div className="container mx-auto py-8 grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {houses.map((house) => {
        return (
          <Link to={`/details/${house.id}`} key={house.id}>
            <div className="cursor-pointer bg-white p-4 rounded-md rounded-tl-[90px] shadow-1 hover:shadow-2xl transition">
              <div className="py-4">
                <img src={house.image} alt="house image" />
              </div>
              <div className="py-4">
                <div className="flex gap-4">
                  <p className="px-2 text-white bg-green-500 rounded-full">
                    {house.type}
                  </p>
                  <p className="px-2 text-white bg-violet-600 rounded-full">
                    {house.country}
                  </p>
                </div>
                <p className="font-semibold py-4 text-xl max-w-xs">
                  {house.address}
                </p>
                <div className="flex gap-4">
                  <div className="flex gap-1 text-xl items-center text-gray-500">
                    <BiBed />
                    <span>{house.bedrooms}</span>
                  </div>
                  <div className="flex gap-1 text-xl items-center text-gray-500">
                    <BiBath/>
                    <span>{house.bathrooms}</span>
                  </div>
                  <div className="flex gap-1 text-xl items-center text-gray-500">
                    <BiArea />
                    <span>{house.surface}</span>
                  </div>
                </div>
                <p className="py-2 text-xl text-violet-600 font-semibold">
                  {house.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  )
};

export default ListView;
