import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GameDisplay from "../components/GameDisplay/GameDisplay";
import About from "../components/About/About";
import Specs from "../components/Specs/Specs";
import Advertisement from "../components/Advertisement";
import Systems from "../components/Systems";
import OnlineBanner from "../components/OnlineBanner";

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <Advertisement />
      <GameDisplay />
      <About />
      <Systems />
      <Specs />
      <OnlineBanner />
      <Footer />
    </div>
  );
}
