import React, { useCallback, useEffect, useState } from 'react';
import { bootcampData } from '@/data/carousels/taacocamp';
import Image from 'next/image';
import Link from 'next/link';

function Trainings() {
    const [activeSlide, setActiveSlide] = useState(0);

    const totalSlidesLength = bootcampData.length;

    const moveSlide = useCallback(() => {
        if(activeSlide === totalSlidesLength - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(prev => prev + 1);
        }
    },[activeSlide, totalSlidesLength])

    useEffect(() => {
        const intervalId = setInterval(() => {
            moveSlide()
        }, 8000);

        return () => clearInterval(intervalId);
    }, [moveSlide]);

    const jumpToSlide = (slideIndex: number) => {
        setActiveSlide(slideIndex);
    }

  return (
    <section className='relative z-[1] w-full min-h-[140vh] bg-[#0D1623]'>
      {
        bootcampData.map((data, idx) => {
            return (
                <section className={`flex pb-2 absolute w-full
                top-0 left-0 min-h-screen items-center bg-[#0D1623]
                transition-all duration-[500ms] ease-linear
                ${activeSlide === idx ?
                    "opacity-100 visible z-[1]" :
                    "opacity-0 invisible -z-[1]"
                }
                `}
                key={data.imageAlt}>
                    <div className='
                    flex flex-col flex-1 px-[5rem] mt-[4rem]'>
                        <h3
                            className='
                                text-[3rem] text-home-white mb-[3rem]
                                w-[70%] leading-[4rem] font-[700]
                            '
                        >{data.title}</h3>
                        <p
                        className='
                            text-[1.4rem] leading-[2.5rem] w-[80%]
                            text-home-white
                        '
                        >{data.descriptions}</p>
                        <Link
                            href={data.linkHref}
                            className='block my-[2rem] px-8 py-3 text-[#0D1623]
                            bg-home-white w-fit capitalize text-[1.3rem]
                            rounded-[2.2rem] transition-all duration-200
                            ease-linear hover:bg-[#a4bded]'
                        >
                            {data.btn}</Link>
                    </div>
                    <div className='relative flex-1 min-w-[50%]
                    rounded-l-[1rem] shadow self-start h-screen
                    '>
                        <Image 
                            src={data.photo}
                            alt={data.imageAlt}
                            width={949}
                            height={659}
                            className='
                            block w-full h-full object-cover object-center
                            rounded-l-[1rem]
                            '
                        />
                    </div>
                </section>
            )
        })
      }
        <div className='absolute bottom-8 left-[50%] -translate-x-[50%]
            w-[2.5rem] h-[1rem flex justify-between
        '>
            {
                bootcampData.map((_, idx) => {
                    return (
                        <div 
                        onClick={() => jumpToSlide(idx)}
                        className={`w-[1rem] h-[1rem] rounded-full
                        cursor-pointer transition-all duration-200 ease-linear 
                        hover:bg-home-white
                        ${
                            activeSlide === idx ? "bg-home-white" : "bg-[#435B84]"
                        }
                        `}
                        key={idx}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Trainings;
