import React from 'react';
import Image from 'next/image';
import MenuIcon from './MenuIcon';

const Navbar = () => {
  return (
    <section className='fixed h-16 w-screen z-10 bg-transparent'>
      <div className='w-[12rem] h-[6rem] ml-8'>
        <Image 
          src='https://res.cloudinary.com/dahddvlgy/image/upload/v1683562851/taacodeep/website/images/logo1.png'
          alt='taacodeep website'
          width={1144}
          height={1144}
          className='block h-full object-cover object-center'
        />
      </div>
      <MenuIcon />
    </section>
  )
}

export default Navbar
