import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/layout";
import "../styles/globals.scss";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const mouse = document.querySelector(".mouse");

    document.addEventListener("mousemove", (event) => {
      let left = event.pageX;
      let top = event.pageY;
      mouse.style.top = `${top - 20}px`;
      mouse.style.left = `${left - 20}px`;
    });
  }, []);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/warpjs@1.0.8/dist/warp.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/script/3dGlobe.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ocanvas/2.8.1/ocanvas.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></Script>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""
      />
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
        strategy="beforeInteractive"
      ></Script>
      <Layout>
        <div className="mouse"> </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
