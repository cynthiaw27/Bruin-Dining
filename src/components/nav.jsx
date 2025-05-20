import React, { useEffect, useState } from "react";
import "./nav.css";
import { Menu, ChevronUp, ChevronDown} from 'lucide-react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";


export function Header() {
  /* isDropdownOpen: holds value of the state */
  /* setIsDropdownOpen: setter function to update state value */
  /* usestate needs both of these!! */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); /* dropdown is initially closed */
  function handleMenuClick() { /* no need to put export default if I don't need to import this func into another file */
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Menu clicked");
  };

  const [activeIndex, setActiveIndex] = useState(null); /* for the accordion collapsables */
  function handleIconClick(index) {
      if (activeIndex === index) { /* if clicked is already active, then close */
        return setActiveIndex(null);
      } else {
          setActiveIndex(index); /* if clicked is not active, then open */
      }
  }

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
              <a href="/hours">Menus</a>
              <a href="/menus">Hours</a> 
              <a href="/locations">Locations</a>
            </div> /* make these pages later */
        )}
      </nav>
      </div>

      <div className="header-row-two">
        <nav className="header-content">

          {/* HOME */}
          <div className="header-individual-items">
            <a href="/">Home</a>
          </div>

          {/* DINING HALLS */}
          <div className="menudropdown">
            <div className="header-individual-items" onClick={() => handleIconClick(0)}> 
            <a>Dining Halls</a>
            <span>
              {activeIndex === 0 ? (
                <ChevronUp className="toggle-icon"/> /* if icon is clicked, show up arrow */
              ) : (
                <ChevronDown className="toggle-icon"/>
             )}
            </span>
            </div>
            {activeIndex === 0 && (
                  <div className="collapse-content">
                    <a href="/deneve">De Neve</a>
                    <a href="/epic">Epicuria at Covel</a>
                    <a href="/bplate">Bplate</a>
                  </div>
                )}
          </div>

          {/* Other menus */}
          <div className="menudropdown">
            <div className="header-individual-items" onClick={() => handleIconClick(1)}> 
            <a>Grab & Go</a>
            <span>
              {activeIndex === 1 ? (
                <ChevronUp className="toggle-icon"/> /* if icon is clicked, show up arrow */
              ) : (
                <ChevronDown className="toggle-icon"/>
             )}
            </span>
            </div>
            {activeIndex === 1 && (
                  <div className="collapse-content">
                    <a href="/bcafe">Bruin Cafe</a>
                    <a href="/cafe1919">Cafe 1919</a>
                    <a href="/foodtrucks">Food Trucks</a>
                    <a href="/rendezvous">Rendezvous</a>
                    <a href="/drey">The Drey</a>
                    <a href="/study">The Study at Hedrick</a>
                    <a href="feast">Feast at Reiber</a>
                  </div>
                )}
          </div>

          {/* HOURS */}
          <div className="header-individual-items">
            <a href="/hours">Hours</a> 
          </div>

          {/* LOCATIONS */}
          <div className="header-individual-items">
            <a href="/locations">Locations</a>
          </div>

          {/* SEARCH */}
          <div>
            <div className="header-individual-items" onClick={() => handleIconClick(2)}>
              <a>
                <span>
                  {activeIndex === 2 ? (
                    <RiCloseLargeFill />
                  ) : (
                    <FaMagnifyingGlass />
                  )}
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
