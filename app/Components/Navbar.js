import React from 'react'

const Navbar = () => {
  return (
    <>
   
    <div className=' w-full h-[3rem]  bg-slate-50 flex flex-row  text-black justify-end  gap-[9rem] items-center p-[2rem] font-extrabold font-serif text-xl  top-[0] fixed'>
    <p className='  text-green-500 font-bold text-2xl  mr-[34rem]'>Sush</p>
<span className='text-green-400'>Home</span>
<span>About Me</span>
<span>Services</span>
<span>Contact Me</span>
    </div>
    </>
  )
}

export default Navbar
