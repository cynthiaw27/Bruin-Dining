import React, {useState} from "react";
import "./nav.css";
import { Menu } from 'lucide-react';

export function Navigation() {
  /* isDropdownOpen: holds value of the state */
  /* setIsDropdownOpen: setter function to update state value */
  /* usestate needs both of these!! */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); /* dropdown is initiially closed */
  function handleMenuClick() { /* no need to put export default if I don't need to import this func into another file */
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Menu clicked");
  };

  return (
  <nav className="nav-dropdown">
    <div>
    <button onClick={handleMenuClick} className="hamburger">
      <Menu size={35} strokeWidth={1.5} /* imported hamburger menu icon from lucide-react */ />
    </button>
    </div>
    {isDropdownOpen /* if dropdown is open, show dropdown content */
      && (
        <div className="dropdownMenu">
          <a href="/">Home</a>
          <a href="/hours">Hours</a>
          <a href="/menus">Menus</a> 
          <a href="/locations">Locations</a>
        </div> /* make these pages later */
    )}
  </nav>
);
}

export function Header() {
  /* isDropdownOpen: holds value of the state */
  /* setIsDropdownOpen: setter function to update state value */
  /* usestate needs both of these!! */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); /* dropdown is initiially closed */
  function handleMenuClick() { /* no need to put export default if I don't need to import this func into another file */
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Menu clicked");
  };

  return (
    <div className="header-bar">
      <div className="header-row-one">
      <a className="logo-link" href="/"> {/* link to home page when logo and/or "Dining" is clicked */}
        <img src="/images/ucla-logo.webp" alt="ucla logo"></img>
        Dining {/* style of the a element cuz its in logo-link*/}
      </a>
      
      {/* hamburger here */}
      <nav className="nav-dropdown">
        <div>
          <button onClick={handleMenuClick} className="hamburger">
            <Menu size={35} strokeWidth={1.5} /* imported hamburger menu icon from lucide-react */ />
          </button>
        </div>
        {isDropdownOpen /* if dropdown is open, show dropdown content */
          && (
            <div className="dropdownMenu">
              <a href="/">Home</a>
              <a href="/hours">Hours</a>
              <a href="/menus">Menus</a> 
              <a href="/locations">Locations</a>
            </div> /* make these pages later */
        )}
      </nav>
      </div>

      <div className="header-row-two">
        <nav className="header-content">
          <a href="/">Home</a>
          <a href="/hours">Hours</a>
          <a href="/menus">Menus</a> 
          <a href="/locations">Locations</a>
        </nav>
      </div>
    </div>
  );
}