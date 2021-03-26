import React from 'react'
import { Link } from 'gatsby'

import NavStyles from './nav.module.scss'

import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav className={ NavStyles.container }>
            
            <div className={ NavStyles.navContainer}>
                <Link to="/about/#about">about me</Link>

                <Link to="/resume/#resume">view my cv</Link>
            </div>

            <div className={ NavStyles.socialsContainer}>
                <a href="https://github.com/chadwinjdeysel" target="_blank">
                    <FaGithub/>
                </a>
                
                <a href="https://www.linkedin.com/in/chadwin-deysel-1704b9178/" target="_blank">
                    <FaLinkedin/>
                </a>
                
                <a href="mailto:chadiwnjdeysel@gmail.com" target="_blank">
                    <FaEnvelope/>
                </a>
                
                <a href="https://wa.me/+2765119957" targer="_blank">
                    <FaWhatsapp/>
                </a>

                <a href="tel:0665119957" target="_blank">
                    <FaPhone/>
                </a>
            </div>
        </nav>
    )
}

export default Nav