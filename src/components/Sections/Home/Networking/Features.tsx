import { raleway, catamaran } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

function Features() {
  return (
    <section
      className="
    halfway-gradient p-[5rem] relative z-[1]
    "
    >
      <div className="w-[45%] text-home-white py-4">
        <h3
          className="
        text-[2rem] text-white drop-shadow-carved-heading font-[300]
        "
        >
          We provide expert wireless network installation services.
        </h3>
        <p
          className="
        text-[1.2rem] leading-[2.5rem] w-[80%]
        py-4
        "
        >
          <span
            className={`
            ${raleway.variable} font-rale text-[1.3rem]
          `}
          >
            TaacoNetworks
          </span>{" "}
          offers experienced wireless network installation services throughout
          Nigeria. We design and install wireless networks for large offices,
          hotels, retail spaces, nursing homes, schools, and assisted livings
          using the latest technology. Our networking solutions include:
        </p>
        <ul className="py-6 list-disc">
          <li className="py-2 text-[1.2rem]">
            Wireless Network Design & Implementation
          </li>
          <li className="py-2 text-[1.2rem]">Fiber Optic Cabling</li>
          <li className="py-2 text-[1.2rem]">Cat5 & Cat6 Cabling</li>
        </ul>
        <Link
          href="/#"
          className="
        text-home-white text-xl border-b-[2px] border-b-[#0870D8] transition-all 
        duration-300 ease-linear hover:border-b-home-white
      "
        >
          LEARN MORE
        </Link>
      </div>
      <div className="w-[45%] text-home-white py-4 mt-[10rem]">
        <h3
          className="
        text-[2rem] text-white drop-shadow-carved-heading font-[300]
        "
        >
          Custom Wireless Networking Solutions for Your Business
        </h3>
        <p
          className="
        text-[1.2rem] leading-[2.5rem] w-[80%]
        py-4
        "
        >
          <span
            className={`
            ${raleway.variable} font-rale text-[1.3rem]
          `}
          >
            TaacoNetworks
          </span> crafts custom wireless networks, utilizing both 2.4 GHz and 5 GHz
          channels, ensuring cost-effective, high-performance, and low-latency
          Wi-Fi in every building.
        </p>
        <p className="
        text-[1.2rem] leading-[2.5rem] w-[80%]
        py-4
        ">
          Our team specializes in surveying, designing, and installing fast,
          high-performance wireless networks for clients. We are dedicated to
          delivering dependable connectivity to guarantee the success of your
          business.
        </p>
        <Link
          href="/#"
          className="
        text-home-white text-xl border-b-[2px] border-b-[#0870D8] transition-all 
        duration-300 ease-linear hover:border-b-home-white
      "
        >
          LEARN MORE
        </Link>
      </div>
    </section>
  );
}

export default Features;
