import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
   
    <div className=' w-full h-[3rem]  bg-slate-50 flex flex-row  text-black justify-end  gap-[9rem] items-center p-[2rem] font-extrabold font-serif text-xl  top-[0] fixed'>
    <p className='  text-green-500 font-bold text-2xl  mr-[34rem]'>Sush</p>
<span className='text-green-400'><Link href="#">Home</Link></span>
<span><Link href="#about" >About Me</Link></span>
<span>
  <Link href =" #services" >Services</Link></span>
<span><Link href=" #contact" >Contact Me</Link></span>
    </div>
    </>
  )
}

export default Navbar
