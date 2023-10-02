import Overlay from "@/components/layouts/Overlay";
import { raleway } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section
      className='
    sticky top-0 h-[100vh] w-full bg-cover bg-center bg-no-repeat
    bg-[url("https://res.cloudinary.com/dahddvlgy/image/upload/v1690214108/taacodeep/website/images/taaconetwork/header.jpg")]
    '
    >
      <Overlay />
      <div className="
      w-[45vw] absolute top-[50%] left-[5rem] text-home-white
      -translate-y-[50%]
      ">
        <h2 className="
          text-[3rem] text-white drop-shadow-carved-heading font-[300]
          ">Network Installation Services</h2>
        <p className='
                text-[1.4rem] leading-[2.5rem] w-[80%]
                py-4
            '>
          Network infrastructure installations created to enhance productivity
          and improve the performance of your IT systems.
        </p>
        <h3 className="
        text-[1.3rem] py-4
        ">by <span className={`
        ${raleway.variable} text-[1.4rem] font-rale text-[#F4B857]
        `}>TaacoNetworks</span></h3>
        <Link
          href="/#"
          className="
        inline-block mt-4 py-3 px-8 rounded-[2.2rem] bg-[#0870D8] opacity-90
        text-white text-xl border-[2px] border-[#0870D8] transition-all 
        duration-300 ease-linear hover:bg-transparent hover:text-home-white
      "
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  );
}

export default Header;
