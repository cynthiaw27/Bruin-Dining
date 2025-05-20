import React from "react";
import './App.css';
import { Header } from "./components/nav.jsx";

function App() {
  return (
    <div>
      <Header />
      <div>
        <div className="pic-container">
          <img src="/images/pizza.avif" className="picss" alt="photo1"/>
          <img src="/images/sushi.avif" className="picss" alt="photo1"/>
          <img src="/images/deneve.avif" className="picss" alt="photo3"/>
        </div>

        <h1>Welcome!</h1>
        <p>Explore our menus and hours of operation.</p>
        <p>Find out more about our dining options on campus.</p>
      </div>
    </div>
  );
}

export default App;