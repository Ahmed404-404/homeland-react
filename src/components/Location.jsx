import React, { useContext, useState } from 'react'
import {RiMapPin2Line} from "react-icons/ri"
import {MdKeyboardArrowDown} from "react-icons/md"
import { HousesData } from '../store/housesData'
const Location = () => {

    const [open, setOpen] = useState(false)

    const {country, setCountry, countries} = useContext(HousesData)
    const handelClick = () => {
        setOpen(!open)
    }

  return (
    <div className='flex-1 relative flex items-center '>
        <div 
            className='px-4 py-2 border rounded-md flex justify-between items-center cursor-pointer w-full' 
            onClick={handelClick}
        >
            <div className='flex items-center gap-4'>
                <span>
                    <RiMapPin2Line className='text-2xl text-violet-700'/>
                </span>
                <span>
                    <h3 className='font-medium text-[15px]'>{country}</h3>
                    
                    <span className='text-[13px]'>select location</span>
                </span>
            </div>
            <MdKeyboardArrowDown className={`text-2xl ${open && "rotate-180" } transition text-violet-700`}/>
        </div>
        {
         open && (
            <div className='absolute top-[70px] p-6 border rounded-md flex items-center gap-4 w-full bg-white z-10'>
                <ul className='flex flex-col gap-4 w-full bg-white'>
                    {
                        countries.map((item, index)=> {
                            return(
                                <li 
                                    key={index}
                                    onClick={() => {
                                        setCountry(item)
                                        setOpen(!open)
                                    }}
                                    className='cursor-pointer'
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
         )
        }
    </div>
  )
}

export default Location