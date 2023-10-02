import React from "react";
import BusinessDescriptions from "./BusinessDetails/BusinessDescriptions";
import { BusinessDesc } from "@/types/navigation";

const NavDetails = ({
  box,
  business,
}: {
  box: boolean;
  business: BusinessDesc | undefined;
}) => {
  return (
    <div
      className={`bg-home-secondary absolute 
          top-0 bottom-0 left-[38%] transition-all duration-[800ms] 
          ease-menu-linear ${box ? "w-[62%]" : "w-0"}`}
    >
      <BusinessDescriptions desc={business} />
    </div>
  );
};

export default NavDetails;
