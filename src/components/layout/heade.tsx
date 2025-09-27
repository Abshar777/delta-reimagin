"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Heade = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Head>
      {/* Meta */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1"
      />
      <meta
        name="description"
        content="Delta International Institute offers expert-led Forex, Crypto and Market courses with transparent fees and global mentors. Start learning online or offline today."
      />
      <meta
        name="keywords"
        content="Delta International Institute, Forex, Crypto, Market, Courses, Online, Offline, Mentors, Transparent Fees, Global Mentors"
      />
      <meta name="author" content="Abshar777" />

      {/* Page Title */}
      <title>Delta institutions of trading</title>

      {/* Favicon */}
      {/* <link rel="shortcut icon" href="/images/favicon.png" /> */}

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap"
        rel="stylesheet"
      />

      {/* CSS Files */}
      {/* <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/css/slicknav.min.css" rel="stylesheet" />
      <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/css/all.min.css" rel="stylesheet" />
      <link href="/css/animate.css" rel="stylesheet" />
      <link href="/css/magnific-popup.css" rel="stylesheet" />
      <link href="/css/mousecursor.css" rel="stylesheet" />
      <link href="/css/custom.css" rel="stylesheet" /> */}
    </Head>
  );
};

export default Heade;
