import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <ul className='sidebar' style={{ display: sidebarVisible ? 'flex' : 'none' }}>
        <li onClick={hideSidebar}>
        <img className='logo' src={logo} alt="LittleAfrika" />
        </li>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={hideSidebar}>Zuhause</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={hideSidebar}>Über uns</Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} duration={500} onClick={hideSidebar}>Preisgestaltung</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={hideSidebar}>Kontakt</Link>
        </li>
        <Link to="booking" smooth={true} duration={500}>
          <button className='btn-nav' onClick={hideSidebar}>Jetzt buchen</button>
        </Link>
      </ul>

      <ul>
        <img className='logo' src={logo} alt="LittleAfrika" />
        <li className='hideOnMobile'>
          <Link to="home" smooth={true} duration={500}>Zuhause</Link>
        </li>
        <li className='hideOnMobile'>
          <Link to="about" smooth={true} duration={500}>Über uns</Link>
        </li>
        <li className='hideOnMobile'>
          <Link to="pricing" smooth={true} duration={500}>Preisgestaltung</Link>
        </li>
        <li className='hideOnMobile'>
          <Link to="contact" smooth={true} duration={500}>Kontakt</Link>
        </li>
        <Link to="booking" smooth={true} duration={500}>
          <button className='btn-nav hideOnMobile'>Jetzt buchen</button>
        </Link>
        <li className='menu-button' onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#00000080">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
