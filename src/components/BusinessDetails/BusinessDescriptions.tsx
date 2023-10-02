import { BusinessDesc } from "@/types/navigation";
import Image from "next/image";
import React from "react";



const BusinessDescriptions = ({ desc }: { desc: BusinessDesc | undefined }) => {
  return (
    <>
    {desc && <section className="flex h-full">
      <article className="p-8 flex flex-col w-[55%] pr-4">
        {/* courses */}
        <section className="py-4 w-[70%]">
          <h2 className="
          text-[.9rem] text-home-white capitalize my-2
          ">{desc.topHead}</h2>
          <p className="text-[1.2rem] text-home-primaryDeep">
            {desc.topDesc}
          </p>
        </section>
        {/* Bootcamp */}
        {desc.secondHead && <section className="py-4 w-[70%]">
          <h2 className="
          text-[.9rem] text-home-white capitalize my-2
          ">{desc.secondHead}</h2>
          <p className="text-[1.2rem] text-home-primaryDeep">
            {desc.secondDesc}
          </p>
        </section>}
        {desc.thirdHead && <section className="py-4 w-[70%]">
          <h2 className="
          text-[.9rem] text-home-white capitalize my-2
          ">{desc.thirdHead}</h2>
          <p className="text-[1.2rem] text-home-primaryDeep">
            {desc.thirdDesc}
          </p>
        </section>}
        <section className="py-4 w-[70%]">
          {desc.summary1 && <p className="text-[.8rem] text-home-primaryDeep">
            {desc.summary1}
          </p>}
          {desc.summary2 && <p className="text-[.8rem] text-home-primaryDeep">
            {desc.summary2}
          </p>}
        </section>
      </article>
      <div className="w-[40%] h-[70%] self-end relative mb-8 mr-[4rem]">
      <Image 
          src={desc.image}
          alt={desc.imageAlt}
          width={914}
          height={1371}
          className='block h-full object-cover object-center'
        />
      </div>
    </section>}
    </>
  );
};

export default BusinessDescriptions;
