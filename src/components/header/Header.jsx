import React, { useState } from 'react'
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className=' sticky top-0 h-[90px] shadow-xl z-30 bg-white'>
        <div className="container xl:max-w-[1200px] mx-auto flex justify-between items-center h-full">
            {/* logo */}
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <nav>
              {/* nav mobile trigger */}
              <div onClick={toggleNav} className="cursor-pointer lg:hidden" id='nav-trigger-btn'>
              <i className="ri-menu-4-fill text-4xl text-primary"></i>
              </div>
            {/* nav */}
            <ul id="nav-menu"  
            className={`fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:items-center lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ${isNavOpen ? 'nav-is-open h-auto p-4' : ''}`}
            >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>                
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header