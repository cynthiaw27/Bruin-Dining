import React from "react";
import './App.css';
import { Navigation, Header } from "./components/nav.jsx";

function App() {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <div>
        <h1>Welcome!</h1>
        <p>Explore our menus and hours of operation.</p>
        <p>Find out more about our dining options on campus.</p>
      </div>
    </div>
  );
}

export default App;