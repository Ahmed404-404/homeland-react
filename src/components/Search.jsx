import React, { useContext } from 'react'
import Location from './Location'
import Property from './Property'
import PriceRange from './PriceRange'
import {CgSearch} from "react-icons/cg"
import { HousesData } from '../store/housesData'

const Search = () => {

  const {handelClick} = useContext(HousesData)

  return (
    <div className='container mx-auto py-6 px-8 flex flex-col lg:flex-row justify-between lg:items-center gap-4 bg-transparent backdrop-blur-[8px] rounded-md lg:-mt-4'>
      <Location/>
      <Property/>
      <PriceRange/>
      <button 
        className='flex-1 bg-violet-700 hover:bg-violet-800 text-white transition rounded-md py-4 flex items-center justify-center'
        onClick={handelClick}  
      >
        <CgSearch className='text-xl'/>
      </button>
    </div>
  )
}

export default Search