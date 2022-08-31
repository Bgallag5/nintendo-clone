import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GameDisplay from "../components/GameDisplay/GameDisplay";

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <GameDisplay />
      <Footer />
    </div>
  );
}
