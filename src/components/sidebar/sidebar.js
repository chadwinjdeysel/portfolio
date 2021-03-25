import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import SidebarStyles from './sidebar.module.scss'

export const SidebarTemplate = ({
    myname,
    title,
    description,
    image
}) => (
    <div className={ SidebarStyles.container }>

        <Link to="/">
            <img src={image}/>
        </Link>        

        <h1>{myname}</h1>

        <h2>{title}</h2>

        <p>{description}</p>

    </div>
)

SidebarTemplate.propTypes = {
    myname: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

const Sidebar = ({data}) => {
    const {frontmatter} = data

    return (
        <SidebarTemplate 
            myname={frontmatter.name}
            title={frontmatter.title}
            description={frontmatter.description}
            image={frontmatter.image}/>
    )
}

Sidebar.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default Sidebar 

