import React from 'react'
import FixedHeader from './FixedHeader';
import Courses from './Courses';
import Trainings from './Trainings';
import Job from './Job';

function Bootcamp() {
  return (
    <section className='w-full min-h-screen flex flex-col justify-center items-center relative'>
      <FixedHeader />
      <Courses />
      <Trainings />
      <Job />
    </section>
  )
}

export default Bootcamp;
