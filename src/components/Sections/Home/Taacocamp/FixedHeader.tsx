import Overlay from "@/components/layouts/Overlay";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FixedHeader() {
  return (
    <section className="w-screen fixed top-0 left-0 flex">
      <div className="w-[70%] h-auto relative">
        <Overlay/>
        <Image
          src={
            "https://res.cloudinary.com/dahddvlgy/image/upload/v1688727097/taacodeep/website/images/taacocamp-sections/staff-training.jpg"
          }
          alt="staff training"
          width={960}
          height={641}
          className="block h-auto w-full object-cover object-center"
        />
        <h2
          className="
          text-[3rem] text-white drop-shadow-carved-heading font-[300]
          absolute top-[25%] left-[50%] -translate-x-[50%]
          "
        >
          Staff Development Programs
        </h2>
        <Link
          className="
        absolute top-[70%] -translate-y-[70%] left-[50%] -translate-x-[50%]
        py-2 px-8 rounded-[2.2rem] bg-[#0870D8] opacity-90 text-white
        text-xl border-[2px] border-[#0870D8] transition-all duration-300
        ease-linear hover:bg-transparent hover:text-white
      "
          href={"/#"}
        >
          Empower Your Team
        </Link>
      </div>
      <div
        className="
      w-[30%] h-[100vh] bg-[#0870D8] flex flex-col justify-center
      items-center
      "
      >
        <div className="w-[80%]">
          <div className="w-[50%] h-auto mb-8">
            <Image
              src={
                "https://res.cloudinary.com/dahddvlgy/image/upload/v1688734526/taacodeep/website/images/taacocamp-sections/staff.gif"
              }
              alt="coder"
              width={480}
              height={480}
              className="block h-auto w-full object-cover object-center"
            />
          </div>
          <h2
            className="
          text-2xl text-home-white drop-shadow-carved-heading font-[700]
          "
          >
            ICT Training for Enhanced Productivity
          </h2>
          <p className="text-lg my-4 text-[#0C0C29]">
            Equip your team with essential tech skills through expert-led
            sessions on technology tools, cybersecurity, data management, and
            more. Empower your staff for success in the digital era.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FixedHeader;
