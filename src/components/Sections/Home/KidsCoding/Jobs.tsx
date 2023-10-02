import Image from "next/image";
import Link from "next/link";
import React from "react";

function Jobs() {
  return (
    <section
      className="
    relative flex wrap gap-[5vw] px-[5rem] py-[6rem]
    bg-home-white z-[1] curve-radius mt-[40rem]
    "
    >
      <div className="w-[45vw] text-home-primaryDeep">
        <h2
          className="
        text-[1.6rem] font-[700] mb-6
        "
        >
          Educators
        </h2>
        <p className="text-[1.2rem] mb-4 ">
          Are you passionate about education and technology? Join Taacokids on
          our mission to empower young minds through interactive coding courses!
        </p>
        <p className="text-[1.2rem] mb-4">
          {`As part of our dynamic team, you'll play a vital role in training and
          guiding kids towards a successful future in the digital world. Whether
          it's Python, Web Development, Data Science, or more, you'll be
          instrumental in shaping their skills and fostering their creativity.`}
        </p>
        <p className="text-[1.2rem] mb-4">
        Join us and be part of a rewarding and fulfilling journey!
        </p>
        <Link
          href="/#"
          className="
        inline-block mt-4 py-3 px-8 rounded-[2.2rem] bg-[#0870D8] opacity-90
        text-white text-xl border-[2px] border-[#0870D8] transition-all 
        duration-300 ease-linear hover:bg-transparent hover:text-home-primaryDark
      "
        >
          LEARN MORE
        </Link>
      </div>
      <div className="relative w-[40vw] h-auto ml-12 rounded-[2rem] mr-12">
        <Image
          src={
            "https://res.cloudinary.com/dahddvlgy/image/upload/v1690037308/taacodeep/website/images/taacokids/educators.jpg"
          }
          alt={"Educators - kid's coding"}
          width={1295}
          height={1080}
          className="block w-full h-full object-cover object-center rounded-[2rem]"
        />
      </div>
    </section>
  );
}

export default Jobs;
