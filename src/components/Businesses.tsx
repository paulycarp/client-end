import { businesses } from "@/data/navigation";
import { BusinessDesc } from "@/types/navigation";
import { catamaran, poppins, raleway } from "@/utils/fonts";
import Link from "next/link";
import React, { useState } from "react";

type NavBox = {
  onBoxOpen: (bussType: BusinessDesc | undefined, businessName: string) => void;
  activeBusiness: string;
};

const hidenNavStyles = `flex flex-col
                     w-fit shadow-nav-hole transition-all duration-[400ms]
                    ease-linear rounded-lg `;

const Businesses = ({ onBoxOpen, activeBusiness }: NavBox) => {
  const [index, setIndex] = useState(-1);

  const handleNavDropDown = (idx: number) => setIndex(idx);

  const view = businesses.map((business, idx) => {
    if (business.subItem) {
      return (
        <section key={idx} className="">
          <span
            onMouseOver={() => handleNavDropDown(idx)}
            className={`
                        ${raleway.variable} text-[1.2rem] w-fit cursor-pointer
                        font-rale text-home-white py-1
                        `}
          >
            {business.name}
          </span>
          <div
            className={`${hidenNavStyles} 
                ${index === idx ? "h-full py-[0.5rem] px-[1rem]" : "h-0 p-0"}
                `}
          >
            {business.subItem.map((subBusiness, indx) => {
              return (
                <Link
                  onMouseOver={() =>
                    onBoxOpen(subBusiness.subDetail, subBusiness.name)
                  }
                  className={`${catamaran.variable} nav-link font-cat
                          ${
                            activeBusiness === subBusiness.name
                            ? "after:opacity-100 after:visible"
                            : "after:opacity-0 after:invisible"
                          }
                         ${
                           index === idx
                             ? "after:w-4 after:h-4"
                             : "after:w-0 after:h-0"
                         }
                        `}
                  href={subBusiness.href || "/#"}
                  key={indx}
                >
                  {index === idx && subBusiness.name}
                </Link>
              );
            })}
          </div>
        </section>
      );
    } else {
      return (
        <Link
          onMouseOver={() => onBoxOpen(business.subDetail, business.name)}
          href={business.href || "/#"}
          key={idx}
          className={`{raleway.variable} nav-link 
          ${
            activeBusiness === business.name
            ? "after:opacity-100 after:visible"
            : "after:opacity-0 after:invisible"
          }
          `}
        >
          {business.name}
        </Link>
      );
    }
  });
  return <section className="flex flex-col p-8">{view}</section>;
};

export default Businesses;
