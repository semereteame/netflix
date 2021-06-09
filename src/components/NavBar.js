import React, { useState, useEffect } from "react";
import "./NavBar.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return ()=>{
        window.removeEventListener("scroll")
    }
  }, []);


  return (
    <div className={`nav ${show && "nav__black" }`} data-test = "Navcomponent">
      <img
      data-test= "logo"
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
        alt="Netflixlog"
      />
    </div>
  );
};

export default Nav;
