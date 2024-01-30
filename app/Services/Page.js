import React from 'react'
import Image from 'next/image'
const Services= () => {
  return (
    <div id="services" className='h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='flex  flex- justify-center font-bold text-[1.5rem] text-green-500  mb-[5rem]'><p className='text-white pr-[1rem]'>My</p> Services</h1>
    <div className='flex flex-row justify-center items-center gap-[2rem]'>
    <div className=' h-[18rem] w-[20rem] border-[3px] border-green-500 shadow-md shadow-white '><Image src='/business.jpg' height={100} width={10} className='h-full w-full'/></div>
    <div className=' h-[18rem] w-[20rem] border-[3px] border-green-500 shadow-md shadow-white '><Image src='/menu-01.png' height={100} width={1} className='h-[18rem] w-[16rem]'/></div>
    <div className=' h-[18rem] w-[20rem] border-[3px] border-green-500 shadow-md shadow-white '>Lorem ipsum dolor sit amet.</div>
    </div>
    </div>
  )
}

export default Services
