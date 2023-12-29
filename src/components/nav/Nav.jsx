import React from 'react';
import './Nav.css';

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><IoHomeOutline/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoProjectSymlink/></a>
      <a href='#projects'onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GrProjects/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TfiEmail/></a>
    </nav>
  )
}

export default Nav;