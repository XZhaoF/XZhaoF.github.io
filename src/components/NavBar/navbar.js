import React, {useState} from 'react';
import './navbar.css'
import logo from "../../assets/xzf_logo.png"
import {Link} from 'react-scroll';
import contactImg from "../../assets/contact_me_img.JPG"
import menu from '../../assets/mobilemenu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={700} className="desktopItemMenuList">Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={700} className="desktopItemMenuList">About</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={700} className="desktopItemMenuList">Portfolio</Link>
            <Link activeClass="active" to="technologies" spy={true} smooth={true} offset={-100} duration={700} className="desktopItemMenuList">Technologies</Link>
        </div>

        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contactPage').scrollIntoView({behavior: "smooth"});
        }}>

            <img src={contactImg} alt="" className="desktopMenuImg" /></button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="mobileMenu" style={{display: showMenu? "flex": "none"}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={700} className="MenuList" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={700} className="MenuList" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={700} className="MenuList" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass="active" to="technologies" spy={true} smooth={true} offset={-100} duration={700} className="MenuList" onClick={()=>setShowMenu(false)}>Technologies</Link>
            <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={700} className="MenuList" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar

