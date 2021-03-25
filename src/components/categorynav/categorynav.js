import React from 'react'
import {Link} from 'gatsby'

import CategoryNavStyles from './categorynav.module.scss'

const CategoryNav = () => {
    return (
        <div className={CategoryNavStyles.container}>
            <Link to="/" className={`${CategoryNavStyles.category} ${CategoryNavStyles.all}`}>all posts</Link>
            <Link to="/categories/projects" className={`${CategoryNavStyles.category} ${CategoryNavStyles.project}`}>projects</Link>
            <Link to="/categories/case-studies" className={`${CategoryNavStyles.category} ${CategoryNavStyles.caseStudy}`}>case studies</Link>
            <Link to="/categories/articles" className={`${CategoryNavStyles.category} ${CategoryNavStyles.article}`}>articles</Link>
            <Link to="/categories/tutorials" className={`${CategoryNavStyles.category} ${CategoryNavStyles.tutorial}`}>tutorials</Link>
        </div>
    )
}

export default CategoryNav