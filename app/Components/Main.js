import React from 'react'
import Image  from 'next/image'
const Main = () => {
  return (
    <div  className=' flex flex-row justify-between'>
        <div className='w-[50%]  h-screen  flex flex-col justify-center items-center'>
        <h2 className=''>Hi there</h2>
      <h1 className=' text-[2rem] font-bold '>I am a Web Developer</h1>
    <h2>Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing.

    </h2>
    </div>
    <div className= 'w-[50%] text-black'>
    <Image  className='h-[45rem] w-[35rem]  mt-[4rem] ml-[10rem]'  src='/sushbg-01.png '  height={60} width={500}></Image>
    </div>
    </div>
  )
}

export default Main
