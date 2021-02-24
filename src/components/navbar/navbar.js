import React, { useState } from 'react'
import { Link } from 'gatsby'

import NavStyles from './navbar.module.scss'

const Navbar = ({ component }) => {
    const [ navActive, setNavActive ] = useState(false);
    return (
        <div className={ NavStyles.navContainer}>

            <div className={ NavStyles.navBrand }>

            </div>

            <div className={ [NavStyles.navToggler, navActive ? NavStyles.cross : ""].join(' ')} onClick={() => setNavActive(!navActive)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={ [NavStyles.nav, navActive ? NavStyles.navShow : ""].join(' ') } >
                <nav className={ NavStyles.navLinks }>
                    <Link to="/" activeClassName={ NavStyles.navActiveLink } onClick={() => setNavActive(!navActive)}>Home</Link>

                    <Link to="/collection" activeClassName={ NavStyles.navActiveLink } onClick={() => setNavActive(!navActive)}>Collection</Link>

                    <Link to="/about" activeClassName={ NavStyles.navActiveLink } onClick={() => setNavActive(!navActive)}>About</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar