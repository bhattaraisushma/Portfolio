import React from 'react'

const Page = () => {
  return (
    <div className=' w-full h-screen  flex flex-row justify-center items-center gap-[4rem]'>
      <div className='h-[15rem] w-[15rem] bg-neutral-50 border-green-500 border-double'>Iamge</div>
      <div className='flex flex-col font-semibold text-[1rem]'><h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
   <br></br>
   <h1>Name : Sushma Bhattarai</h1>
   <h1>Age  : 21</h1>
   <h1>Address : Butwal</h1>
   <h1>Email : bhattaraisushma260@gmail.com</h1>
   <br></br>
    <button className='h-[3rem] w-[10rem] bg-green-500 rounded-full'>Download Cv</button>
    </div></div>
  )
}

export default Page
