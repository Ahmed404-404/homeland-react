import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { housesData } from '../data'
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BiArea } from "react-icons/bi";

const Details = () => {

  const {id} = useParams()

  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })

  return (
    <div className='bg-white py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 gap-4'>
          <div>
            <h2 className='font-bold text-2xl'>{house.name}</h2>
            <p className='py-2'>{house.address}</p>
          </div>
          <div className='flex gap-2'>
            <p className='px-4 bg-green-500 w-fit rounded-full text-white h-[30px] flex items-center justify-center'>{house.type}</p>
            <p className='px-4 bg-violet-500 w-fit rounded-full text-white h-[30px] flex items-center justify-center'>{house.country}</p>
          </div>
          <p className='text-violet-700 text-3xl font-semibold'>${house.price}</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div>
            <div>
              <img src={house.imageLg} alt="house image"/>
            </div>
            <div className='py-4 flex gap-4'>
              <div className="flex gap-1 text-xl items-center text-violet-600">
                <BiBed />
                <span>{house.bedrooms}</span>
              </div>
              <div className="flex gap-1 text-xl items-center text-violet-600">
                <BiBath />
                <span>{house.bathrooms}</span>
              </div>
              <div className="flex gap-1 text-xl items-center text-violet-600">
                <BiArea/>
                <span>{house.surface}</span>
              </div>
            </div>
            <p className='py-4'>{house.description}</p>
          </div>
          <div className='px-4 py-8 border border-gray-400 rounded-md h-fit'>
            <form>
              <div className='flex items-center gap-4 py-4'>
                <div className='border border-gray-400 p-1 rounded-full'>
                  <img 
                    src={house.agent.image} 
                    alt="agent image"
                    className='w-[70px]'
                  />
                </div>
                <h3 className='text-xl font-semibold'>{house.agent.name}</h3>
                <Link className='text-violet-600'>view listings</Link>
              </div>
              <div className='flex flex-col gap-4'>
                <input 
                  type="text" 
                  placeholder='Name*'
                  className='border border-gray-400 p-4 outline-none focus:border-violet-700 transition rounded-md'
                />
                <input 
                  type="email" 
                  placeholder='Email*' 
                  className='border border-gray-400 p-4 outline-none focus:border-violet-700 transition rounded-md'
                />
                <input 
                  type="text" 
                  placeholder='Phone*' 
                  className='border border-gray-400 p-4 outline-none focus:border-violet-700 transition rounded-md'
                />
                <textarea 
                  placeholder='Hello, I am intersted in [Modern apartment]'
                  className='border border-gray-400 p-4 outline-none focus:border-violet-700 transition rounded-md resize-none'
                ></textarea>
                <div className='flex gap-4 items-center'>
                  <button className='flex-1 bg-violet-700 hover:bg-violet-800 transition text-white px-4 py-2 rounded-md'>send message</button>
                  <button className='flex-1 px-4 py-2  bg-white text-black border border-violet-700 rounded-md'>call</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details