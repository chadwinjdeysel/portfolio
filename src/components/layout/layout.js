import React from 'react'

import LayoutStyles from './layout.scss'
import 'normalize.css'

import Navbar from '../navbar/navbar'
import Head from '../head/head'

const Layout = ({ 
        children,
        title, 
        page,
        description,
        url,
        keywords,
        image
    }) => {

    return (
        <div>
            <Head page={page}
                title={title}
                description={description}
                keywords={keywords}
                image={image}
                url={url}
            />

            {children}
        </div>
    )
}

export default Layout

