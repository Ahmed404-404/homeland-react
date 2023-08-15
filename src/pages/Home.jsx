import React from 'react'
import Image from "../assets/img/house-banner.png"
import Search from "../components/Search"
import ListView from '../components/ListView'

const Home = () => {
  return (
    <section className=' mx-auto bg-white '>
      <div className='flex flex-col lg:flex-row-reverse items-center'>
        <div className='flex-1 hidden lg:block'>
          <img src={Image} alt="house banner image" />
        </div>
        <div className='flex flex-1 flex-col gap-y-4 text-center lg:text-left ml-0 xl:ml-[110px] px-5'>
          <h1 className='font-semibold text-4xl lg:text-6xl capitalize leading-none '><span className='text-violet-700'>Rent</span> your dream house with us.</h1>
          <p className='max-w-lg mx-auto lg:mx-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita aliquam et saepe consectetur quae in sequi incidunt, eaque repellendus?</p>
        </div>
      </div>
      <Search/>
      <ListView/>
    </section>
  )
}

export default Home