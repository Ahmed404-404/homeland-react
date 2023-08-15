import React, { useContext, useState } from 'react'
import {PiHouseSimple} from "react-icons/pi"
import {MdKeyboardArrowDown} from "react-icons/md"
import { HousesData } from '../store/housesData'
const Property = () => {

    const [open, setOpen] = useState(false)

    const [select, setSelect] = useState("Property type (any)")
    const {property,setProperty,properties} = useContext(HousesData)

    const handelClick = () => {
        setOpen(!open)
    }

  return (
    <div className='flex-1 relative flex items-center h-[64px]'>
        <div 
            className='px-4 py-2 border rounded-md flex justify-between items-center cursor-pointer w-full' 
            onClick={handelClick}
        >
            <div className='flex items-center gap-4'>
                <span>
                    <PiHouseSimple className='text-2xl text-violet-700'/>
                </span>
                <span>
                    <h3 className='font-medium text-[15px]'>{property}</h3>
                    
                    <span className='text-[13px]'>select  Property </span>
                </span>
            </div>
            <MdKeyboardArrowDown className={`text-2xl ${open && "rotate-180" } transition text-violet-700`}/>
        </div>
        {
         open && (
            <div className='absolute top-[70px] p-6 border rounded-md flex items-center gap-4 w-full bg-white z-10'>
                <ul className='flex flex-col gap-4 w-full'>
                    {
                        properties.map((item, index)=> {
                            return(
                                <li 
                                    key={index}
                                    onClick={() => {
                                        setProperty(item)
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

export default Property