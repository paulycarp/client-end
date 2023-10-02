import Image from "next/image";
import Link from "next/link";
import React from "react";

function ParentsSection() {
  return (
    <section className="
    relative flex wrap gap-[15vw] px-[5rem] py-[6rem]
    mt-12 bg-home-primaryDeep z-[1]
    ">
      <div className="relative w-[25vw] h-[25vw] ml-12 rounded-[50%]">
        <Image
          src={
            "https://res.cloudinary.com/dahddvlgy/image/upload/v1689881282/taacodeep/website/images/taacokids/parents.jpg"
          }
          alt={"parents of kids, kid's coding"}
          width={1295}
          height={1080}
          className="block w-full h-full object-cover object-center rounded-[50%]"
        />
      </div>
      <div className="w-[45vw] text-home-white">
        <h2 className="
        text-[1.6rem] font-[700] mb-6
        ">Parents & Guardians</h2>
        <p className="text-[1.2rem] mb-4 ">
          Coding plays a pivotal role in our daily lives. It drives innovation
          in cars, coffee makers, medicine, environmental conservation, space
          exploration, and countless other fields, shaping our daily lives.
        </p>
        <p className="text-[1.2rem] mb-4">
          At Taacokids, we offer self-paced, game-like coding courses for kids
          and teens. With personalized coaching, we guide children of all ages
          and skill levels towards coding certification. Our proven methodology
          covers Python, Web Dev, Data Science, and more!
        </p>
        <p className="text-[1.2rem] mb-4">
        {"Select the option that\'s best for your child!"}
        </p>
        <Link
          href="/#"
          className="
        inline-block mt-4 py-3 px-8 rounded-[2.2rem] bg-[#0870D8] opacity-90
        text-white text-xl border-[2px] border-[#0870D8] transition-all 
        duration-300 ease-linear hover:bg-transparent hover:text-home-secondary
      "
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  );
}

export default ParentsSection;
