import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { coursesData } from "@/data/pageSections/home/courses";

function Courses() {
  const [disableBtn, setDisableBtn] = useState({ left: false, right: false });

  let containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      setDisableBtn((prev) => ({ ...prev, left: true }));
    });

    if(containerRef.current) {
        containerRef.current.addEventListener('scrollend', () => {
            handleScrollEnd()
        })
    }

    }, []);


  const handleSlideLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -=
        (containerRef.current.children[0] as HTMLElement).offsetWidth + 48;        
    }
  };

  const handleSlideRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft +=
        (containerRef.current.children[0] as HTMLElement).offsetWidth + 48;
    }
  };

  const handleScrollEnd = () => {
    if(containerRef.current) {
        const offsetLeft = containerRef.current.scrollWidth - containerRef.current.scrollLeft;

        if(containerRef.current.scrollLeft === 0) {
            setDisableBtn((prev) => ({ ...prev, left: true }));
        } else if(offsetLeft <= containerRef.current.offsetWidth) {
            setDisableBtn((prev) => ({ ...prev, right: true }));
        } else {
            setDisableBtn({ left: false, right: false});
        }
    }
  };

  return (
    <section
      className="
    flex flex-col pl-[10rem] relative z-[1]
    w-full bg-[#0D1623] mt-[100vh] py-[10rem]
    overflow-hidden
    "
    >
      <h2
        className="
        text-4xl text-white mb-[5rem]
      "
      >
        Explore Top Courses
      </h2>
      <div
        ref={containerRef}
        className="
        flex gap-12 w-full items-stretch overflow-x-scroll
        no-scrollbar scroll-smooth overflow-y-hidden py-4
      "
      >
        {coursesData.map((data) => {
          return (
            <figure
              className="
                     flex flex-col min-w-[40%] transition-all duration-200
                     ease-linear hover:scale-[1.08]
                    "
              key={data.photoDesc}
            >
              <div
                className="
                        relative w-full h-[15rem]
                        "
              >
                <Image
                  src={data.photo}
                  alt={data.photoDesc}
                  width={850}
                  height={550}
                  className="block w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="flex flex-col py-8 bg-[#1E2F46] px-8 h-[22rem]">
                <h3
                  className="
                                text-[1.4rem] text-white font-[500] py-6
                            "
                >
                  <span className="text-[#0870D8]">{data.title}</span>: &nbsp;
                  {data.details}
                </h3>
                <Link
                  className="
                            py-2 px-8 rounded-[5px] bg-[#0870D8] opacity-90 text-white
                            text-xl border-[2px] border-[#0870D8] transition-all duration-300
                            ease-linear hover:bg-transparent hover:text-white capitalize
                            self-start
                          "
                  href={data.linkHref}
                >
                  read more
                </Link>
              </figcaption>
            </figure>
          );
        })}
        <div className="min-w-[8rem]"/>
      </div>
      <div className="my-[4rem] flex w-fit bg-[#1A2942]">
        <button
          disabled={disableBtn.left}
          onClick={handleSlideLeft}
          className="
            py-4 px-2 border-none outline-none text-[1.5rem] 
            font-[300] text-white transition-[background] duration-200
            ease-in hover:bg-[#0870D8] disabled:bg-[#435b84]
            disabled:text-[#aaa]
        "
        >
          <BsChevronLeft />
        </button>
        <button
          disabled={disableBtn.right}
          onClick={handleSlideRight}
          className="
            py-4 px-2 border-none outline-none text-[1.5rem] 
            font-[300] text-white transition-[background] duration-200
            ease-in hover:bg-[#0870D8] disabled:bg-[#435b84]
            disabled:text-[#aaa]
        "
        >
          <BsChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Courses;
