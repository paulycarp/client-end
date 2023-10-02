import HomeVideo from "@/components/HomeVideo";
import Overlay from "@/components/Overlay";
import KidsCoding from "@/components/Sections/Home/KidsCoding";
import TaacoNetwork from "@/components/Sections/Home/Networking";
import Bootcamp from "@/components/Sections/Home/Taacocamp";
import { catamaran, raleway } from "@/utils/fonts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TAACODEEP Technologies</title>
      </Head>
      <section className="relative h-screen overflow-hidden z-[1]">
        <Overlay />
        <HomeVideo />
        <h1
          className={`
          ${catamaran.variable} 
          font-cat w-fit ml-auto absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 z-5 text-home-white text-8xl 
          tracking-widest`}
        >
          <span
            className={`${raleway.variable} font-rale 
          block text-3xl mb-4 tracking-wider
        `}
          >
            it&apos;s all
          </span>
          About Technology ...
        </h1>
        <div className="absolute top-[85vh] w-screen h-15v bg-hero bg-repeat-x" />
      </section>
      <Bootcamp />
      <KidsCoding />
      <TaacoNetwork />
    </>
  );
}
