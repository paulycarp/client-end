import { menu } from "@/data/navigation";
import Link from "next/link";
import React from "react";

type NavBox = {
  onBoxClose: () => void;
}

const SiteMenu = ({ onBoxClose }: NavBox) => {
  return (
    <nav className="flex flex-col p-8">
      {menu.map((item, idx) => (
          <Link 
          key={idx}
          onMouseMove={onBoxClose}
          className="text-home-primaryDeep capitalize py-1
          hover:underline decoration-home-white
          "
          href={item.href || "/#"}>{item.name}</Link>
      ))}
    </nav>
  );
};

export default SiteMenu;
