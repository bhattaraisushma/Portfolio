'use client'
import Image  from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Main = () => {

  return (
    <div   id="#" className=' flex flex-row justify-between bg-img bg-no-repeat  bg-width'>
        <div className='w-[50%]  h-screen  flex flex-col justify-center items-center'>
        <h2 className=''>Hi there</h2>
      <h1 className=' text-[2rem] font-bold '>I am a <span className=' text-green-500'>Web Developer</span></h1>
    <h2>Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing.

    </h2>
    </div>
    <div className= ' h-screen w-[50%] text-black flex justify-center items-center'>
 
    <div className=' h-[25rem] w-[28rem] bg-white text-black rounded-[7rem]  flex items-center justify-center mt-[2rem] p-[2rem]  border-green-500 border-[4px]'>
  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  h-[25rem] object-cover rounded-[7rem]">
     
  
        <SwiperSlide >
       
          <Image src='/sush.jpg' className='h-full w-full  object-fill rounded-[7rem] '   height={1} width={400}/>
       
       </SwiperSlide>

       <SwiperSlide>
       
          <Image src='/sush.jpg' className='h-full w-full  object-fill  rounded-[7rem] '   height={1} width={400}/>

     
       </SwiperSlide>
       </Swiper>
      
       </div>
    </div>
    </div>
  )
}

export default Main
