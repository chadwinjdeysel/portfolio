import React from 'react'

import LayoutStyles from './layout.scss'
import 'normalize.css'

import Navbar from '../navbar/navbar'

const Layout = ({ children}) => {
    return (
        <div>
            <Navbar/>

            {children}
        </div>
    )
}

export default Layout

