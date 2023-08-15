import React from 'react'
import Logo from "../assets/img/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-white w-full mx-auto py-4 border border-gray-200'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className='w-[120px] sm:w-fit'/>
          </Link>
        </div>
        <div className='flex gap-4  '>
          <button className='capitalize px-4 py-2 hover:text-violet-700 transition'>log in</button>
          <button className='capitalize px-4 py- bg-violet-700 hover:bg-violet-800 text-white rounded-md transition'>sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Header