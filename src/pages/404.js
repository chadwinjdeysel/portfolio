import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'

import NotFoundStyles from './404.module.scss'

import NotFoundIMG from '../img/notfound.gif'

const NotFoundPage = () => (
    <Layout>

        <div className={ NotFoundStyles.container }>
            <h1>Nothing Was Found..</h1>

            <p>nothing was found at this location</p>

            <Link to="/">Return Home Instead?</Link> <br/>

            <img src={NotFoundIMG}
                alt="Chadwin Deysel 404"/>
        </div>
        
    </Layout>
)

export default NotFoundPage