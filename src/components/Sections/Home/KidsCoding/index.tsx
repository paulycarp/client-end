import React from 'react'
import StickyHeader from './StickyHeader';
import ParentsSection from './ParentsSection';
import TransparentBG from './TransparentGB';
import Jobs from './Jobs';

function KidsCoding() {
  return (
    <section className='relative z-[1] min-h-screen bg-home-white py-[5rem]'>
      <StickyHeader />
      <ParentsSection />
      <TransparentBG />
      <Jobs />
    </section>
  )
}

export default KidsCoding;
