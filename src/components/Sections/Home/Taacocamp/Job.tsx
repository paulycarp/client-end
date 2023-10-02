import Image from "next/image";
import Link from "next/link";
import React from "react";

function Job() {
  return (
    <section className="relative z-[1] flex bg-[#0D1623] pt-[5rem] min-h-screen">
      <div className="relative min-w-[50%] h-screen">
        <Image
          src={
            "https://res.cloudinary.com/dahddvlgy/image/upload/v1688490013/taacodeep/website/images/taacocamp-sections/taacocamp-teacher.jpg"
          }
          alt="apply as a tutor"
          width={1428}
          height={953}
          className="block w-full h-full object-cover 
          object-center clip-parallelogram"
        />
      </div>
      <div className="min-w-[50%] self-center">
        <h4 className="text-2xl leading-[2.5rem] text-home-white w-[80%]">
          Join TaacoCamp as a Coding Mentor and help us unlock the potential of
          aspiring coders. Inspire, guide, and make an impact in shaping the
          next generation of tech enthusiasts.
        </h4>
        <Link
          className="block my-[2rem] px-8 py-3 text-[#0D1623]
        bg-home-white w-fit capitalize text-[1.3rem]
        rounded-[2.2rem] transition-all duration-200
        ease-linear hover:bg-[#a4bded]"
          href="/#"
        >
          Join us Today!
        </Link>
      </div>
    </section>
  );
}

export default Job;
