import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./Pages/Home/Hero";
import Benefit from "./Pages/Home/Benefit";
import Skills from "./Pages/Home/Skills";
function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Benefit />
      <Skills />
    </div>
  );
}

export default App;
