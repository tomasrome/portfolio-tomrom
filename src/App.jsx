import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="pagina">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
