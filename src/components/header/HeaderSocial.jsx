import React from 'react'
import './Header.css';

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/awanishyadav' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/awanishyadavv/' target='_blank'><FaGithub/></a>
        <a href='https://www.instagram.com/awanishyadavv/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'><FaInstagram/></a>
    </div>
  );
}

export default HeaderSocial;