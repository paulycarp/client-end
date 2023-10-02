import React from "react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
      <main>
        <Navbar />
        <>{children}</>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
