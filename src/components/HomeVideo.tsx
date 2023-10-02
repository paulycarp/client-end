import React from 'react'

const HomeVideo = () => {
  return (
    <video
      className='absolute h-85v w-screen object-cover object-center inset-x-0 t-0 mix-blend-overlay'
        src="https://res.cloudinary.com/dahddvlgy/video/upload/v1683043235/taacodeep/website/videos/hero-banner.mp4"
        muted
        autoPlay
        loop
      ></video>
  )
}

export default HomeVideo
