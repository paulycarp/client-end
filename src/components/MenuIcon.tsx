import React, { useState } from "react";
import Businesses from "./Businesses";
import SiteMenu from "./SiteMenu";
import NavDetails from "./NavDetails";
import { BusinessDesc } from "@/types/navigation";

const MenuIcon = () => {
  const [linkDetailsBox, setLinkDetailsBox] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState("");
  const [businessType, setBusinessType] = useState<BusinessDesc | undefined>();

  const handleLinkBoxOpen = (
    bussType: BusinessDesc | undefined,
    businessName: string
  ) => {
    setLinkDetailsBox(true);
    setBusinessType(bussType);
    setActiveBusiness(businessName);
  };
  const handleLinkBoxClose = () => {
    setLinkDetailsBox(false);
    setBusinessType(undefined);
    setActiveBusiness("");
  };

  return (
    <>
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label
        htmlFor="menu-toggle"
        className="
        group absolute bg-home-white h-[70px] w-[70px] top-[32px] 
        shadow-xl right-[64px] rounded-full text-center cursor-pointer z-[50]
        "
      >
        <span
          className="
            relative mt-[35px] w-[30px] h-[2px] bg-home-secondary 
            inline-block before:w-[30px] before:h-[2px] 
            before:bg-home-secondary before:inline-block before:absolute 
            before:left-0 before:-top-[8px] before:transition-all 
            before:duration-200 after:absolute after:left-0 after:top-[8px] 
            after:transition-all after:duration-200 after:w-[30px] 
            after:h-[2px] after:bg-home-secondary after:inline-block 
            group-hover:before:-top-[10px] group-hover:after:top-[10px] 
            group-peer-checked:bg-transparent group-peer-checked:before:top-0 
            group-peer-checked:before:rotate-[135deg] group-peer-checked:after:top-0 
            group-peer-checked:after:rotate-[-135deg]
            "
        >
          &nbsp;
        </span>
      </label>

      <div
        className="
        h-[60px] w-[60px] rounded-full absolute top-[37px] right-[69px] 
        bg-menu z-[30] transition-transform duration-[800ms]
        ease-menu-transition-one peer-checked:scale-[80]
        "
      />
      <nav
        className="
        h-screen fixed top-0 left-0 z-[35] opacity-0 w-0 
        peer-checked:opacity-100 transition-all duration-[400ms] 
        ease-menu-linear peer-checked:w-screen peer-checked:delay-[800ms] flex group
        "
      >
        <div
          className="
          w-[38%] border-r-4 border-home-primaryDeep invisible opacity-0
          group-peer-checked:visible group-peer-checked:opacity-100
          "
        >
          <Businesses onBoxOpen={handleLinkBoxOpen} activeBusiness={activeBusiness}/>
          <SiteMenu onBoxClose={handleLinkBoxClose} />
        </div>
        <div
          className="
          w-[62%] bg-nav-home bg-cover bg-center bg-no-repeat
          shadow-image-overlay-secondary"
        />
        <div
          className="w-[62%] bg-home-secondary absolute 
          top-0 bottom-0 left-[calc(38%-4px)] group-peer-checked:left-full
          transition-all group-peer-checked:delay-[1s] duration-[800ms] 
          ease-menu-linear"
        />
        <NavDetails box={linkDetailsBox} business={businessType} />
      </nav>
    </>
  );
};

export default MenuIcon;
