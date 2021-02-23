import React from 'react'

import LayoutStyles from './layout.scss'
import 'normalize.css'

const Layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout

