import React from 'react'
import './Footer.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Awanish Yadav</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio/Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/awanishyadav' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/awanishyadavv/' target='_blank'><FaGithub/></a>
        <a href='https://www.instagram.com/awanishyadavv/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'><FaInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Element Design. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer;