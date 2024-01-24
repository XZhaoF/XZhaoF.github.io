import React from 'react';
import './navbar.css'
import logo from "../../assets/xzf_logo.png"
import {Link} from 'react-scroll';
import contactImg from "../../assets/contact_me_img.JPG"

const Navbar = () => {
  return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopItemMenuList">Home</Link>
            <Link className="desktopItemMenuList">About</Link>
            <Link className="desktopItemMenuList">Portfolio</Link>
            <Link className="desktopItemMenuList">Technologies</Link>
        </div>

        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" /></button>
      </nav>
  )
}

export default Navbar

