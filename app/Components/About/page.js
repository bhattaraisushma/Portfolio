import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div  id ="about" className=' w-full h-screen  flex flex-row justify-center items-center gap-[4rem]'>
      <div className='h-[15rem] w-[15rem] bg-neutral-50 border-green-500 border-[4px]'><Image src='/sush.jpg'className='h-full w-full '   height={1} width={400}/></div>
      <div className='flex flex-col font-semibold text-[1rem]'><h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
   <br></br>
   <h1>Name <span className='pl-[2rem] pr-[1rem]'>: </span>Sushma Bhattarai</h1>
   <h1>Age  <span className='pl-[3rem] pr-[1rem]'>: </span> 21</h1>
   <h1>Address  <span className='pl-[1rem] pr-[1rem]'>: </span> Butwal</h1>
   <h1>Email <span className='pl-[2.5rem] pr-[1rem]'>: </span> sushmabhattarai538@gmail.com</h1>
   <br></br>
    <button className='h-[3rem] w-[10rem] bg-green-500 rounded-full'>Download Cv</button>
    </div></div>
  )
}

export default Page
