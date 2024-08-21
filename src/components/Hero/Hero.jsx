import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroImg from "../../assets/strawberry.png"
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa";

const Hero = () => {
const [sidebar,setSidebar] = React.useState(false);

  return <main className='bg-primaryDark md:py-6 md:px-12'>
    <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl
    shadow-md'>
      <div className="container">
        <Navbar sidebar={sidebar}
         setSidebar={setSidebar}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
        {/* text-container */}
        <div className='text-white space-y-4 p-4 md:mt-0'>
          <h1 className='text-3xl pl-6 md:pl-14'>01______</h1>
          <h1 className='text-5xl font-bold uppercase text-shadow'>A healthy fruit</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi ut reiciendis iste dignissimos vel distinctio placeat, fuga, animi modi </p>
          <button className='border border-white px-4 py-2 rounded-lg'>Shop Now</button>
        </div>
        {/* image-container */}
        <div>
          <img src= {HeroImg} alt="Not found" 
          className='w-[400px] img-shadow relative z-[1]' />
        </div>
        {/* blank-container */}
        <div className='md:hidden'>

        </div>
        </div>
      </div>
      <h1 className='text-center text-[80px] text-white font-bold sm:text-[120px] md:text-[150px] xl:text-[180px]absolute bottom-99 z-0 w-full  text-shadow'>BERRIES

      </h1>
      {sidebar && (
        <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
          <div className='w-full h-full flex flex-col justify-center items-center gap-6 '>
          {/* Lining */}
          <div className='w-[1px] h-[70px] bg-white'>
          </div>
          {/* social media links */}
          <div  className='inline-block p-2 rounded-full cursor-pointer border border-white text-white'>
          <FaFacebook className='text-2xl' />
          </div>
          <div  className='inline-block p-2 rounded-full cursor-pointer border border-white text-white'>
          <FaLinkedin className='text-2xl'/>
          </div>
          <div  className='inline-block p-2 rounded-full cursor-pointer border border-white text-white'>
          <FaInstagram className='text-2xl' />
          </div>
          {/* Lining */}
          <div className='w-[1px] h-[70px] bg-white'>
          </div>
          </div>
        </div>
      )}
    </section>
  </main>
}

export default Hero;