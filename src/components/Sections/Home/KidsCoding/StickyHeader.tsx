import { catamaran } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function StickyHeader() {
  return (
    <section className="sticky top-0 flex px-[5rem] gap-[5%]">
      <div className="w-[55%]">
        <h2 className="text-[1.6rem] font-[700] mb-6">
          <span className={`${catamaran.variable} text-[2.5rem] font-cat text-home-secondary`}>
            Taacokids
          </span>
          : Empowering Young Coders for a Limitless Future
        </h2>
        <p className="text-home-primaryDeep text-[1.2rem] mb-3">
          At Taacokids, we employ a unique blend of interactive learning
          methods, engaging projects, and hands-on coding activities tailored
          specifically for young learners.
        </p>
        <p className="text-home-primaryDeep text-[1.2rem] mb-3">
          Our experienced instructors guide and inspire kids through
          step-by-step programming challenges, sparking their curiosity and
          critical thinking abilities. We focus on fostering creativity,
          problem-solving skills, and teamwork, creating an environment where
          kids can explore, experiment, and grow as confident programmers.
        </p>
        <p className="text-home-primaryDeep text-[1.2rem] mb-3">
          With a carefully crafted curriculum and a supportive community,
          Taacokids ensures that every child receives personalized attention and
          the tools they need to excel in the world of programming.
        </p>
        <Link href="/#" className="
        inline-block mt-4 py-3 px-8 rounded-[2.2rem] bg-[#0870D8] opacity-90
        text-white text-xl border-[2px] border-[#0870D8] transition-all 
        duration-300 ease-linear hover:bg-transparent hover:text-home-primaryDark
      ">EXPLORE CURRICULUM</Link>
      </div>
      <div className="relative w-[40%] self-center rounded-[2rem]">
        <Image 
        src={'https://res.cloudinary.com/dahddvlgy/image/upload/v1689880864/taacodeep/website/images/taacokids/header.jpg'}
        alt="kids coding trainings"
        width={1343}
        height={895}
        className="block w-full h-auto object-cover object-center rounded-[2rem]"
        />
      </div>
    </section>
  );
}

export default StickyHeader;
