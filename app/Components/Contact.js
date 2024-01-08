import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className=' flex  flex-col justify-center h-screen items-center bg-img '>
      <span className='text-3xl text-green-400 flex flex-row  pb-[16rem] '>Connect
      <p className='text-white  text-3xl pl-[1rem]'> with me</p>
      </span>
      <div className='flex justify-center items-center text-2xl text-green-500 gap-[2rem]'>
       <button className='rounded-[2rem] bg-green-500 text-white h-[3rem] w-[9rem] hover:bg-white hover:text-black'> <a href='https://www.instagram.com/sush_ma___/'>Instagram</a></button>
       <button className='rounded-[2rem] bg-green-500 text-white h-[3rem] w-[9rem] hover:bg-white hover:text-black'> <a href='https://www.facebook.com/sushma.bhattarai.3532'>Facebook</a></button>
       <button className='rounded-[2rem] bg-green-500 text-white h-[3rem] w-[9rem] hover:bg-white hover:text-black'> <a href ='https://www.linkedin.com/in/sushma-bhattarai-b04712212/'>Linked in</a></button>


      </div>

    </div>
  )
}

export default Contact
