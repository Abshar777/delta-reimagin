"use client";
import React, { useState, useEffect, Suspense } from "react";
import Preloader from "./preloader";
import Header from "../global/header";
// import Footer from "../global/footer";
import { Toaster } from "sonner";
import MainFooter from "../global/footer";

const Indexlayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
        <Toaster position="bottom-right" richColors />
      <Preloader />
      <Header />
        <Suspense fallback={<div></div>}>{children}</Suspense>
      <MainFooter />
    </>
  );
};

export default Indexlayout;
