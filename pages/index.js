import React from "react";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GameDisplay from "../components/GameDisplay/GameDisplay";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <script
          defer
          src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"
        ></script>
      </Head>
      <div className="app-container">
        <Header />
        <GameDisplay />
        <About />
        <Footer />
      </div>
    </>
  );
}
