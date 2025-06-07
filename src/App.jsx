import React from "react";
import './App.css';
import { Header } from "./components/nav.jsx";
import { FooterPart } from "./components/footer.jsx";
import { Carousel } from "./components/horizontal_scroll.jsx";

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="body-container">
        <Carousel />
        <div className="body-text-container">
          <h1>BLAY BLAH BALH</h1>
          <p>hellur there</p>
          <p>BLAH BLAH BALHB LAH</p>
          <p>pretend this is something interesting and important to read</p>
        </div>
      </div>
      <FooterPart />
    </div>
  );
}

export default App;